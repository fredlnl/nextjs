import Backend from './Backend'
import React, { Component, useState } from 'react';
import Frontend from './Frontend';
import Database from './Database';

type TabProps = {
    text : string
    openTab : number
    setOpenTab: Function
    item : number
    color : string
}

const Tab = ({text, openTab, setOpenTab, item, color} : TabProps)  => (
    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
        <a
        className={
            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
            (openTab === item
            ? "text-white bg-blue-600 underline"
            : "text-blue-600 bg-white")
        }
        onClick={(e) => {
            e.preventDefault();
            setOpenTab(item);
          }}
        data-toggle="tab"
        href={`#link${item}`}
        role="tablist"
        >
        {text}
        </a>
    </li>
)

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <Tab
                color={color}
                text="Backend"
                openTab={openTab}
                setOpenTab={setOpenTab}
                item={1}
                />
            <Tab
                color={color}
                text="Frontend"
                openTab={openTab}
                setOpenTab={setOpenTab}
                item={2}
                />
            <Tab
                color={color}
                text="Database"
                openTab={openTab}
                setOpenTab={setOpenTab}
                item={3}
                />
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Backend />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Frontend />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Database />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Technos = () => (
  <div className="flex flex-row" id="technos">
    <div className=" -ml-56 opacity-25 w-96 h-96">
        <svg className="text-pink-500 opacity-50 fill-current w-88 h-88" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5,-24.7C35.8,-15.2,48.9,-7.6,50.6,1.7C52.3,11,42.6,22,32.3,31.2C22,40.4,11,47.8,-1.9,49.8C-14.9,51.7,-29.7,48.1,-41.1,38.9C-52.5,29.7,-60.5,14.9,-60.3,0.3C-60,-14.3,-51.5,-28.6,-40,-38.1C-28.6,-47.6,-14.3,-52.3,-3.4,-48.9C7.6,-45.5,15.2,-34.2,25.5,-24.7Z" transform="translate(100 100)"></path>
        </svg>
    </div>


    <Tabs color="blue" />

    <div className=" -mb-56 opacity-25 w-96 h-96 -mr-72">
        <svg className="w-full h-full text-yellow-500 opacity-50 fill-current" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.3,-48.3C55.3,-33.4,60.4,-16.7,62.2,1.8C64,20.3,62.5,40.6,51.6,55.3C40.6,70,20.3,79,2.3,76.7C-15.7,74.4,-31.4,60.7,-46.7,46C-62,31.4,-76.9,15.7,-78.5,-1.6C-80,-18.8,-68.2,-37.6,-52.9,-52.5C-37.6,-67.5,-18.8,-78.5,-1.1,-77.5C16.7,-76.4,33.4,-63.3,44.3,-48.3Z" transform="translate(100 100)"></path>
        </svg>
    </div>
  </div>
);



export default Technos
