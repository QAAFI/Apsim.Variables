import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef, useState } from 'react';
import sorghumData from '../../public/sorghum.json';
import { BadgeColor } from "../components/atoms";
import { FloatingInput } from "../components/atoms/input";
import { FilterRes, FilterSearch } from "../components/molecules/filter-search";
import { TagInput } from "../components/molecules/tag-input";
import { ApsimVariable } from "../models";

const filterOptions = [
  { name: "Variable name", value: "0" },
]
const colorMapper: { [key: string]: BadgeColor } = {
  "0": 'blue',
}

const EditVariables: NextPage = () => {
  const [sorghumVariables, setSorghumVariables] = useState<ApsimVariable[]>([]);
  const [search, setSearch] = useState<FilterRes>({});

  const suggestions = useRef<string[]>([]);
  const importButton = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSorghumVariables(sorghumData);
    suggestions.current = sorghumData.map(d => d.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorghumData])

  const downloadFile = ({ data, fileName, fileType }) => {
    // Create a blob with the data we want to download as a file
    const blob = new Blob([data], { type: fileType })
    // Create an anchor element and dispatch a click event on it
    // to trigger a download
    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
  }

  const exportToJson = e => {
    e.preventDefault()
    downloadFile({
      data: JSON.stringify(sorghumVariables),
      fileName: 'sorghum.json',
      fileType: 'text/json',
    })
  }

  const searchByVariableName = (searchValue: string, line: ApsimVariable) => {
    if (!!line.name) {
      return line.name.toLowerCase().includes(searchValue.toLowerCase())
    } else {
      return true;
    }
  }

  const getFilterFuction = (methodIdx: number, search: string, line: ApsimVariable) => {
    switch (methodIdx) {
      case 0:
        return searchByVariableName(search, line)
    }
  }

  const handleFilter = (values: FilterRes) => {
    setSearch(values)
  }

  const readFileSuccess = (res) => {
    const data = JSON.parse(res);
    setSorghumVariables([...data]);
  }

  const handleFileUpload: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newFile = e.target?.files?.[0];
    console.log(newFile)
    if (newFile) {
      var fileReader = new FileReader();
      fileReader.onload = function (evt) { readFileSuccess(evt.target?.result) };
      fileReader.readAsText(newFile as File);
    }
  }

  const filterMethod = (line: ApsimVariable) => {
    let condition: boolean | undefined = true;
    for (var key in search) {
      for (let value of search[key] ?? []) {
        condition = condition && getFilterFuction(+key, value, line);
      }
    }
    return condition
  }

  return (
    <>
      <Head>
        <title>Parse Apsim classic variables</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href={`${process.env.BACKEND_URL}/favicon.ico`} />
      </Head>

      <main className="container mx-auto flex flex-col items-center min-h-screen p-4">
        <h1 className="md:text-[2rem] leading-normal font-bold text-gray-700">
          Edit Apsim Classic Variables
        </h1>
        <div className="flex">
          <input id="import-file" ref={importButton} type="file" className="hidden" onChange={handleFileUpload} />
          <button type='button'
            onClick={() => importButton.current?.click()}
            className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Import JSON
          </button>
          <button type='button' onClick={exportToJson}
            className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Export to JSON
          </button>
        </div>
        <div className="mt-4 w-full">

          <FilterSearch
            filterPlaceholder={{ name: "Please select" }}
            options={filterOptions}
            onChange={(values) => handleFilter(values)}
            colorMap={colorMapper}
            suggestions={suggestions.current}
          />
        </div>

        < ul className="w-full pt-2 container mx-auto flex flex-col " >
          {sorghumVariables?.map((line, index) => {
            if (filterMethod(line) === false) return;
            return (
              line.name ? (
                <li key={index} className="p-2 relative border flex-row" >
                  {line.name &&
                    <div className="flex">
                      <div className="flex flex-col w-1/4">
                        <div className="p-1 font-semibold">{line.name}</div>
                        <div className="pl-1 italic text-xs l-4 text-gray-400"> {line.units ? line.units : null}</div>
                        <div className="basis-1/4 p-1 text-sm text-gray-600">{line.description ? line.description : null}</div>
                      </div>
                      <div className="flex flex-col w-3/4 gap-2">
                        <FloatingInput lable="Apsim NextGen Reference" value={line.nextgen} onChange={(value: string) => { line.nextgen = value; setSorghumVariables([...sorghumVariables]) }} />
                        <TagInput initValues={line.tags} label="Apsim NextGen Tags" onChange={(value: string[]) => line.tags = value} id={'tag-input-' + index} />
                      </div>
                    </div>
                  }
                </li>
              ) : (
                !search && (<li key={index} className="p-2 relative border flex-row" >
                  <div className="p-1 italic">{line.source}</div>
                </li>)
              )
            )
          })
          }
        </ul>
      </main>
    </>
  );
};

export default EditVariables;
