import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from 'react';
import sorghumData from '../../public/sorghum.json';
import { BadgeColor } from "../components/atoms";
import { FilterRes, FilterSearch } from "../components/molecules/filter-search";
import { ApsimVariable } from "../models";

const filterOptions = [
  { name: "Variable name", value: "0" },
  { name: "Heading", value: "1" },
  { name: "Tag name", value: "2" },
]
const colorMapper: { [key: string]: BadgeColor } = {
  "0": 'blue',
  "1": 'green',
  "2": 'red',
}

const EditVariables: NextPage = () => {
  const [sorghumVariables, setSorghumVariables] = useState<ApsimVariable[]>([]);
  const [search, setSearch] = useState<FilterRes>({});



  useEffect(() => {

    setSorghumVariables(sorghumData);
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
    return line?.name?.toLowerCase().includes(searchValue.toLowerCase())
  }

  const getFilterFuction = (methodIdx: number, search: string, line: ApsimVariable) => {
    switch (methodIdx) {
      case 0:
        return searchByVariableName(search, line)
      case 1:
        break;
      case 2:
        break;
    }
  }

  const handleFilter = (values: FilterRes) => {
    setSearch(values)
  }

  const filterMethod = (line: ApsimVariable) => {
    let condition: boolean | undefined = undefined;
    for (var key in search) {
      for (let value of search[key] ?? []) {
        condition = condition || getFilterFuction(+key, value, line);
      }
    }
    return condition
  }

  return (
    <>
      <Head>
        <title>Parse Apsim classic variables</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="md:text-[2rem] leading-normal font-bold text-gray-700">
          Edit Apsim Classic Variables
        </h1>
        <button type='button' onClick={exportToJson}
          className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Export to JSON
        </button>
        <div className="mt-4 w-full">

          <FilterSearch
            filterPlaceholder={{ name: "Please select" }}
            options={filterOptions}
            onChange={(values) => handleFilter(values)}
            colorMap={colorMapper}
          />
        </div>

        < ul className="w-full pt-2 container mx-auto flex flex-col " >
          {sorghumVariables?.map((line, index) => {

            if (filterMethod(line) === false) return;
            return (
              line.name ? (
                <li key={index} className="p-2 relative border flex-row" >
                  {line.name &&
                    <div className="flex flex-col">
                      <div className="flex flex-row">
                        <div className="flex-col w-1/4">
                          <div className="p-1 font-semibold">{line.name}</div>
                          <div className="p-1 italic l-4 text-gray-400"> {line.units ? line.units : null}</div>
                        </div>
                        <div className="w-3/4 flex-col">
                          <label htmlFor="nextgen" className="p-1 block">Apsim NextGen Reference</label>
                          <input type="text" name="nextgen" id="nextgen" className="w-full p-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border rounded-md"
                            value={line.nextgen} onChange={(e) => {
                              line.nextgen = e.target.value;
                            }} />
                        </div>
                      </div>
                      <div className="basis-1/2 p-1 text-gray-600">{line.description ? line.description : null}</div>
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
