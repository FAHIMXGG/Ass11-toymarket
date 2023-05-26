import React, { memo, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import 'react-tabs/style/react-tabs.css';
import DataLoad from './DataLoad';

const ShopByCategory = memo(() => {

    const [toys, setToys] = useState([]);
    


    useEffect(() => {
        fetch('https://ass-11-toys-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(error => console.error(error))
    }, [])


    const search = "RegularCar"
    const search2 = "SportsCar"
    const search3 = "Truck"


    //console.log(toys)

    return (
        <div className=''>
            <Tabs className={'mb-28'}>
                <TabList className={"flex justify-center gap-2"}>
                    <Tab className={"bg-[#75E6DA] text-[#0C2D48] px-2 py-1 rounded font-semibold "}><button>Regular Car</button></Tab>
                    <Tab className={"bg-[#75E6DA] text-[#0C2D48] px-2 py-1 rounded font-semibold "}><button>Sports Car</button></Tab>
                    <Tab className={"bg-[#75E6DA] text-[#0C2D48] px-2 py-1 rounded font-semibold "}><button>Truck</button></Tab>
                </TabList>

                <div className='flex justify-center mt-5'>
                <hr className='border-1 w-10/12 border-cyan-400' />
                </div>

                <TabPanel className={"grid lg:grid-cols-4 gap-10 lg:px-28 mt-6 px-5"}>
                    {
                        toys.filter((item) => {
                            return search === '' ? item : item.subCategory.includes(search)
                        }).slice(0, 4).map(data =>
                            <DataLoad
                                key={data._id}
                                toy={data}
                            ></DataLoad>
                        )

                    }
                </TabPanel>
                <TabPanel className={"grid lg:grid-cols-4 gap-10 lg:px-28 px-5"}>
                    {
                        toys.filter((item) => {
                            return search2 === '' ? item : item.subCategory.includes(search2)
                        }).slice(0, 4).map(data =>
                            <DataLoad
                                key={data._id}
                                toy={data}
                            ></DataLoad>
                        )

                    }
                </TabPanel>
                <TabPanel className={"grid lg:grid-cols-4 gap-10 lg:px-28 px-5 "}>
                    {
                        toys.filter((item) => {
                            return search3 === '' ? item : item.subCategory.includes(search3)
                        }).slice(0, 4).map(data =>
                            <DataLoad
                                key={data._id}
                                toy={data}
                            ></DataLoad>
                        )

                    }
                </TabPanel>
            </Tabs>
        </div>
    );
});

export default ShopByCategory;