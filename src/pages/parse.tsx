import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from 'react';
import { ApsimVariable } from "../models";


const Parse: NextPage = () => {
  const [areaText, setAreaText] = React.useState('Paste text here');
  const [parsedText, setParsedText] = React.useState<ApsimVariable[]>([]);

  function parseText(contents: string): ApsimVariable[] {
    let variables: ApsimVariable[] = [];

    try {
      //const re = new RegExp('(?<=\[).+?(?=\])');
      //const re = new RegExp('\[(.*?)\]');
      //const re = new RegExp(/(?<=\[).+?(?=\])/);//([^]]+)
      //const re = new RegExp(/\[(.*?)\]/);
      const reDesc = new RegExp(/(?<=\[Description\(\").+?(?=\"\)\])/);//([^]]+)
      const reUnits = new RegExp(/(?<=\[Units\(\").+?(?=\"\)\])/);//([^]]+)
      const reName = new RegExp(/(?<=Variable\(\").+?(?=\"\))/);//([^]]+)

      const lines = contents.split('\n');
      variables = lines.map(line => {

        let desc = reDesc.exec(line);
        let units = reUnits.exec(line);
        let name = reName.exec(line);

        return {
          name: name ? name[0] : null,
          description: desc ? desc[0] : null,
          units: units ? units[0] : null,
          source: line
        };
      })
      variables = variables.filter(av => av.source);
    }
    catch (ex) {
      console.error('Error parsing text: ' + ex);
    }
    return variables.sort(compareStringProps('name'));
    //return variables.sort((a,b) => a && b ? a.name.trim().toLowerCase() < b.name.trim().toLowerCase() : a ? a : b);
  }
  function compareStringProps(prop: string) {
    return function (a, b) {
      const a1 = a[prop]?.trim().toLowerCase();
      const b1 = b[prop]?.trim().toLowerCase();
      return a1 < b1 ? -1 : b1 < a1 ? 1 : 0;
    }
  }

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
      data: JSON.stringify(parsedText),
      fileName: 'sorghum.json',
      fileType: 'text/json',
    })
  }

  return (
    <>
      <Head>
        <title>Parse Apsim classic variables</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href={`${process.env.BACKEND_URL}/favicon.ico`} />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="md:text-[2rem] leading-normal font-bold text-gray-700">
          Parse Apsim Classic Variables
        </h1>
        <div className="w-full">
          <textarea className="w-full border-gray-400 border-2 h-64"
            value={areaText}
            onChange={async (e) => {
              setAreaText(e.target.value);
              setParsedText(await parseText(e.target.value));
            }}
          />
        </div>
        <button type='button' onClick={exportToJson}
          className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Export to JSON
        </button>
        <ul className="w-fit pt-2 container mx-auto flex flex-col ">
          {parsedText?.map((line, index) =>
            <li key={index} className="p-2 relative border flex-row" >
              {line.name ?
                <div className="flex flex-row">
                  <div className="basis-1/4 p-1 font-semibold">{line.name}</div>
                  <div className="basis-1/4 italic ml-4 text-gray-400"> {line.units ? line.units : null}</div>
                  <div className="basis-1/2 p-1 text-gray-600">{line.description ? line.description : null}</div>
                </div>
                :
                <div className="p-1 italic">{line.source}</div>
              }
            </li>
          )}
        </ul>
      </main>
    </>
  );
};

export default Parse;
