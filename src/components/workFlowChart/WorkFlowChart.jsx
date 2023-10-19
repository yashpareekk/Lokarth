import React from 'react'
import "./WorkFlowChart.css"
import flowLine from "../../assets/Vector 9.png"


const WorkData = [
    {
        heading: 'Target your audience effectively',
        information: 'Using basic skills you can improve your business stuff with Around Using basic skills'
    },
    {
        heading: 'Build dashboard in minutes',
        information: 'Using basic skills you can improve your business stuff with Around Using basic skills you can.'
    },
    {
        heading: 'Easily download your tables and',
        information: 'Using basic skills you can improve your business stuff with Around Using basic skills'
    },
    {
        heading: 'Access to dashboard  from all',
        information: 'Using basic skills you can improve your business stuff with Around Using basic skills'
    },
];

const WorkFlowChart = () => {
    return (
        <div className='comp_4'>
            <div className='total'>

                <div className='head1'>
                    <p>How Does It Work?</p>
                </div>
                <div className='head2'>
                    <p>Using basic skills you can improve your business stuff with Around</p>
                </div>

                <div className='flow'>
                    {
                        !!WorkData && WorkData?.map((work, index) => {
                            return (
                                <>
                                    <div className='box' key={index}>
                                        <div className='boxh1'>
                                            <p>{work?.heading}</p>
                                        </div>

                                        <div className='boxtxt' >
                                            <p>{work?.information}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
            
        </div>
    )
}

export default WorkFlowChart
