import React from 'react'
import "./SyncCustomers.css"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"
import icon5 from "../../assets/icon5.png"
import icon6 from "../../assets/icon6.png"


const gridData = [

    {
        photo: icon1,
        heading: 'Sync people & companies',
        info: "All of your HubSpot, Intercom, and Slack customers, all in one place with a two way sync."
    },
    {
        photo: icon2,
        heading: 'Fast search',
        info: "Hit cmd+K and start searching for a customer, whether it be a person or a company."
    },
    {
        photo: icon3,
        heading: 'Auto merge',
        info: "Got a customer in both Intercom and HubSpot? No worries, they’re automatically merged in Nexus."
    },
    {
        photo: icon4,
        heading: 'Link feedback to customers',
        info: "Automatically fetch the right customer or create a new one in Nexus."
    },
    {
        photo: icon5,
        heading: 'Filter views',
        info: "Each customer has a profile that aggregates their feedback and related product initiatives."
    },
    {
        photo: icon6,
        heading: 'Customer profiles',
        info: "Each customer has a profile that aggregates their feedback and related product initiatives."
    },

]

const SyncCustomers = () => {
    return (
        <div className='comp6'>
            <div className='mainContainer1'>
                <div className='h6_1'>
                    <p>Sync your customers</p>
                </div>
                <div className='h6_2'>
                    <p>Turn Nexus into a CRM for your product team by bringing your customers from HubSpot, Intercom, and Slack.</p>
                </div>

                <div className='gridOuter'>

                <div className='grid'>
                    {!!gridData && gridData?.map((grid, index) => {
                        return (
                            <>
                                <div className='box6'>
                                    <div className='icon'>
                                        <img src={grid?.photo} alt='iconimage' />
                                    </div>
                                    <div className='h6_3'>
                                        <p>{grid?.heading}</p>
                                    </div>
                                    <div className='txt6'>
                                        <p>{grid?.info}</p>
                                    </div>
                                </div>
                            </>

                        )
                    })

                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default SyncCustomers
 

 