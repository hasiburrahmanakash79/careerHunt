import React from 'react';
import {
    Area,
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';


const Statistics = () => {
    const data = [
        {
            serial: "assignment-1",
            mark: 60,
            BgColor: 60
        },
        {
            serial: "assignment-2",
            mark: 60,
            BgColor: 60
        },
        {
            serial: "assignment-3",
            mark: 58,
            BgColor: 58
        },
        {
            serial: "assignment-4",
            mark: 60,
            BgColor: 60
        },
        {
            serial: "assignment-5",
            mark: 60,
            BgColor: 60
        },
        {
            serial: "assignment-6",
            mark: 60,
            BgColor: 60
        }
        ,
        {
            serial: "assignment-7",
            mark: 60,
            BgColor: 60
        }
        ,
        {
            serial: "assignment-8",
            mark: 60,
            BgColor: 60
        }
    ];


    return (
        <div>
            <h3 className='text-center text-3xl md:text-5xl py-10 font-bold  title'>Assignment Mark</h3>
            <div style={{ width: '100%', height: 700 }}>
                <ResponsiveContainer>
                    <ComposedChart
                        width={500}
                        height={500}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="serial" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="BgColor" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="mark" barSize={30} fill="#413ea0" />
                        <Line type="monotone" dataKey="mark" stroke="#ff2213" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div >
    );
};

export default Statistics;