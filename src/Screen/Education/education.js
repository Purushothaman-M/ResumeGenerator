import React, {useState} from "react";
import Select from "react-select";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";
import "./gowthamcss.css"
export default function App () {
  const [data, setdata]=useState()

  const formik = useFormik ({
    initialValues:{
      schoolname:"",
      city:"",
      state:"",
      sslc:"",
      hsc:"",
      selectdegree:"",
      graduationmonth:"",
      graduationyear:""
    },
    onSubmit: (values) =>{
      alert(JSON.stringify(values));
    }
  })

  const defaultvalue = (value) =>{
    return options? options.find(options=>options.value===value):""
  }

  const options = [
    { label:"AN", value:"Andaman and Nicobar Islands"},
    { label:"AP",value:"Andhra Pradesh"},
    { label:"AR",value:"Arunachal Pradesh"},
    { label:"AS",value:"Assam"},
    { label:"BR",value:"Bihar"},
    { label:"CH",value:"Chandigarh"},
    { label:"CT",value:"Chhattisgarh"},
    { label:"DN",value:"Dadra and Nagar Haveli"},
    { label:"DD",value:"Daman and Diu"},
    { label:"DL",value:"Delhi"},
    { label:"GA",value:"Goa"},
    { label:"GJ",value:"Gujarat"},
    { label:"HR",value:"Haryana"},
    { label:"HP",value:"Himachal Pradesh"},
    { label:"JK",value:"Jammu and Kashmir"},
    { label:"JH",value:"Jharkhand"},
    { label:"KA",value:"Karnataka"},
    { label:"KL",value:"Kerala"},
    { label:"LA",value:"Ladakh"},
    { label:"LD",value:"Lakshadweep"},
    { label:"MP",value:"Madhya Pradesh"},
    { label:"MH",value:"Maharashtra"},
    { label:"MN",value:"Manipur"},
    { label:"ML",value:"Meghalaya"},
    { label:"MZ",value:"Mizoram"},
    { label:"NL",value:"Nagaland"},
    { label:"OR",value:"Odisha"},
    { label:"PY",value:"Puducherry"},
    { label:"PB",value:"Punjab"},
    { label:"RJ",value:"Rajasthan"},
    { label:"SK",value:"Sikkim"},
    { label:"TN",value:"Tamil Nadu"},
    { label:"TG",value:"Telangana"},
    { label:"TR",value:"Tripura"},
    { label:"UP",value:"Uttar Pradesh"},
    { label:"UT",value:"Uttarakhand"},
    { label:"WB",value:"West Bengal"}
  ]

  const options1 = [
  { label:"Janaury",value:"Janaury"},
  { label:"February",value:"February"},
  { label:"March",value:"March"},
  { label:"April",value:"April"},
  { label:"May",value:"May"},
  { label:"June",value:"June"}, 
  { label:"July",value:"July"}, 
  { label:"August",value:"August"},
  { label:"September",value:"September"}, 
  { label:"October",value:"October"},
  { label:"November",value:"November"}, 
  { label:"December",value:"December"}, 
  ]

  const options2 = [
    { value:"2021",label:"2021" },
    { value:"2020",label:"2020" },
    { value:"2019",label:"2019" },
    { value:"2018",label:"2018" },
    { value:"2017",label:"2017" },
    { value:"2016",label:"2016" },
    { value:"2015",label:"2015" },
    { value:"2014",label:"2014" },
    { value:"2013",label:"2013" },
    { value:"2012",label:"2012" },
    { value:"2011",label:"2011" },
    { value:"2010",label:"2010" },
    { value:"2009",label:"2009" },
    { value:"2008",label:"2008" },
    { value:"2007",label:"2007" },
    { value:"2006",label:"2006" },
    { value:"2005",label:"2005" },
    { value:"2004",label:"2004" },
    { value:"2003",label:"2003" },
    { value:"2002",label:"2002" },
    { value:"2001",label:"2001" },
    { value:"2000",label:"2000" },
    { value:"1999",label:"1999" },
    { value:"1998",label:"1998" },
    { value:"1997",label:"1997" },
    { value:"1996",label:"1996" },
    { value:"1995",label:"1995" },
    { value:"1994",label:"1994" },
    { value:"1993",label:"1993" },
    { value:"1992",label:"1992" },
    { value:"1991",label:"1991" },
    { value:"1990",label:"1990" },
    { value:"1989",label:"1989" },
    { value:"1988",label:"1988" },
    { value:"1987",label:"1987" },
    { value:"1986",label:"1986" },
    { value:"1985",label:"1985" },
    { value:"1984",label:"1984" },
    { value:"1983",label:"1983" },
    { value:"1982",label:"1982" },
    { value:"1981",label:"1981" },
    { value:"1980",label:"1980" },
    { value:"1979",label:"1979" },
    { value:"1978",label:"1978" },
    { value:"1977",label:"1977" },
    { value:"1976",label:"1976" },
    { value:"1975",label:"1975" },
    { value:"1974",label:"1974" },
    { value:"1973",label:"1973" },
    { value:"1972",label:"1972" },
    { value:"1971",label:"1971" },
    { value:"1970",label:"1970" },
    { value:"1969",label:"1969" },
    { value:"1968",label:"1968" },
    { value:"1967",label:"1967" },
    { value:"1966",label:"1966" },
    { value:"1965",label:"1965" },
    { value:"1964",label:"1964" },
    { value:"1963",label:"1963" },
    { value:"1962",label:"1962" },
    { value:"1961",label:"1961" },
  ]

 
  return(
    <div>
      <div style={{backgroundColor:"red",height:"4em"}}></div>
      <div className="container">
        <div className="head">
        
          <div className="row"> 
          <div className="col-md-6">     
             <h5>EDUCATION</h5>  
             <p>Add information about your education background.</p>
          </div>
          </div>

          <div>
          <form onSubmit={formik.handleSubmit}>
          <div className="formview">
          <div className="row">

          <div className="col-md-4">
            <label>School Name</label><br/>
            <input className="input" type="text" name="schoolname" placeholder="e.g. Schoolname" value={formik.values.schoolname} onChange={formik.handleChange}/>
          </div>

          <div className="col-md-2">
            <label>city</label>
            <Select placeholder="e.g. Chennai"  ></Select>
          </div>

          <div className="col-md-2">
            <label>State</label>
            <Select placeholder="e.g. TamilNadu" options={options} onChange={(value)=>{formik.setFieldValue("state",value.value)}} value={defaultvalue(formik.values.state)} ></Select>
          </div>

            </div>
            </div>
             
            <div className="formview">
            <div className="row">

          <div className="col-md-4">
            <label>SSLC</label><br/>
            <input className="input" type="number" name="sslc" placeholder="e.g. 100" value={formik.values.sslc} onChange={formik.handleChange} />
          </div>

          <div className="col-md-4">
            <label >HSC</label>
            <input className="input" type="number" name="hsc" placeholder="e.g.100" value={formik.values.hsc} onChange={formik.handleChange}/>
          </div>

          </div>
          </div>

          <div className="formview">
          <div className="row">

          <div className="col-md-4">
            <label>Select a degree</label><br/>
            <input className="input" type="text" name="selectdegree" value={formik.values.selectdegree} onChange={formik.handleChange}/>
          </div>

          <div className="col-md-2">
            <label >Graduation date</label>
            <Select placeholder="Month" options={options1} onChange={(value)=>{formik.setFieldValue("graduationmonth",value.value)}} value={defaultvalue(formik.values.graduationmonth)}></Select>
          </div>

          <div className="col-md-2">
            
            <Select className="year" placeholder="year" options={options2} onChange={(value)=>{formik.setFieldValue("graduationyear",value.value)}} value={defaultvalue(formik.values.graduationyear)}></Select>
          </div>
          <div className="check">
            <input type="checkbox"/>
            <label>I Presently attend here</label>
          </div>

            </div>
            </div>

            <div className="row justify-content-between">
              <div className="col-md-4 ">
                <Button>BACK</Button>
                </div>
                <div className="col-md-4">
                <Button type="submit">SAVE</Button>
              </div>
            </div>

          </form>
          </div>
          </div>
        </div>
      </div>
    
  );
}