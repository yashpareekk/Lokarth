import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"


const footer_data=[
    {
        item:"icon",
        itemValue:logo,
        innerItem:"para",
        innerValue:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
        item:"heading",
        itemValue:"Quick Links",
        innerHeight:"list",
        innerValue:["Home","About","Help","Feedback","Galary","Contact"],
    },
    {
        item:"heading",
        itemValue:"Research",
        innerItem:"list",
        innerValue:["Research Degrees","Graduate School","Research Archive","Governance & Ethics","Heath Research"],
    },
    {
        item:"heading",
        itemValue:"Get in Touch",
        innerItem:"list",
        innerValue:[`500 Streat Ave, Suite 200 San Francisco, CA 94110`,`+91 702-800-2690 (Support)`,`support@courselog.com`]
    }
]
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='sections'>
            {
                !!footer_data && footer_data?.map((self, index)=>{
                    return(
                        <>
                        <div className='item'>
                            {
                                self?.item==="icon"?(
                                    <img className="footerimg" src={self?.itemValue} alt='icon'/>
                                ):(
                                    <p className='footerhead'>{self?.itemValue}</p>
                                )
                            }
                      
                            {
                                self?.innerItem==="para"?(
                                    <p >{self?.innerValue}</p>
                                ):(
                                    <ul className='footerul'>
                                        {
                                            !!self?.innerValue && self?.innerValue.map((self2,index)=>{
                                                return(
                                                    <li>{self2}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                            }
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

export default Footer

