

import React from "react";
import { headers } from 'next/headers'
import {getIpGeolocation } from '@/actions/locate'
import { RenderBuilderContent } from "@/components/builder";
import { builder } from "@builder.io/sdk";
import {Footer} from "./buider";

import { Secondblock } from "./buider";
import { Thirdblock } from "./buider";
import {Header} from "./buider";


builder.init("406d1519eec3489ab76bedcaf2910259");

const MyComponent4: React.FC = () => {

  // Get the userId from auth() -- if null, the user is not signed in
  const  user  ="hello"


return (
  <div className="box-border flex relative flex-col shrink-0 self-stretch w-screen ml-[calc(50%_-_50vw)] max-md:mt-0">
    <section className="box-border flex relative flex-col grow shrink-0 self-stretch mx-auto w-full max-w-[1200px] max-md:mt-0">
      <div className="box-border flex overflow-hidden relative flex-col shrink-0 justify-end items-start pb-12 w-screen bg-center bg-no-repeat bg-cover bg-[url(https://cdn.builder.io/api/v1/image/assets%2F406d1519eec3489ab76bedcaf2910259%2F1c42dc3d4d1c42f7a197b8ba7de4e08d?width=2000)] h-[599px] ml-[calc(50%_-_50vw)] max-md:h-[488px] max-sm:pb-7   max-sm:h-[300px]">
        <div className="box-border flex relative flex-col shrink-0 self-stretch mt-auto mb-0 w-auto">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="box-border flex relative flex-col shrink-0 self-center p-5 mr-auto mb-1 ml-16 w-auto h-auto text-left max-md:ml-5 max-md:text-center max-sm:mx-auto">
                
                hello
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                sizes="(max-width: 998px) 21vw, 15vw"
                src="https://cdn.builder.io/api/v1/image/assets%2F406d1519eec3489ab76bedcaf2910259%2Fd7ea6ff414ac4cf88ab1ddd4851f9ae3?width=200"
                alt=""
                className="box-border object-cover overflow-hidden shrink-0 mt-5 mr-20 ml-auto w-full rounded-3xl aspect-[6.33] max-w-[200px] min-h-[20px] max-md:hidden max-sm:hidden"
              />
              <div className="box-border flex relative flex-row shrink-0 my-auto max-sm:flex max-sm:flex-row max-sm:my-auto max-sm:h-[94px]">
                <img
                  loading="lazy"
                  sizes="(max-width: 638px) 21vw, (max-width: 998px) 11vw, 15vw"
                  src="https://cdn.builder.io/api/v1/image/assets%2F406d1519eec3489ab76bedcaf2910259%2Ff89084590bb24cf9b65f625efb7a3826?width=206"
                  alt=""
                  className="box-border object-cover overflow-hidden shrink-0 mt-auto mr-auto mb-16 ml-28 w-3/12 aspect-square min-h-[20px] max-md:flex max-md:mx-auto max-md:mb-5 max-md:w-[14%] max-sm:flex max-sm:mx-auto max-sm:w-1/5"
                />
                <img
                  loading="lazy"
                  sizes="(max-width: 998px) 9vw, 7vw"
                  src="https://cdn.builder.io/api/v1/image/assets%2F406d1519eec3489ab76bedcaf2910259%2Fb9ac5df965634527a9d73985e1a231f0?width=89"
                  alt=""
                  className="box-border object-contain overflow-hidden shrink-0 my-auto mr-auto w-full aspect-square max-w-[89px] min-h-[20px] max-md:hidden max-sm:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
  </div>
);
};




export default function SectionExample( ) {


  return (
    <>
    <Header/>
    <MyComponent4 />
    <Login />
    <SectionExample/>
    <Secondblock/>

    <Thirdblock/>
<Footer/>
 
    </>
  );
}

async function Login() {
  const header = headers()
  const ip = (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]

    const ipInfo = await getIpGeolocation({ip});
    let customText = '';
    if (ipInfo.region_name === 'Georgia') {
      customText = `${ipInfo?.city_name}, GA`;
    } else {
      customText = 'Contact Support';
    }
  const urlPath = '/' + (('/') || '');

  const content = await builder
    .get("ctablock", {
      userAttributes: {
        urlPath,
      },
      prerender: false,
    })
    .toPromise();

  return (
    <>
      <RenderBuilderContent
        content={content}
        data={{ customText }}
      />
    </>
  );
}