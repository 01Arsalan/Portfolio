import React from "react"
import { companies } from "@/data/"


const Companies = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-28 max-lg:mt-10">
            {companies.map((company) => (
                <React.Fragment key={company.id}>
                    <div className="flex md:max-w-60 max-w-32">
                        <img
                            src={company.img}
                            alt={company.name}
                            className={`md:w-10 w-5 ${company.imgClass}`}
                        />
                        {!company.hasName && 
                        <h3 
                        className={company.nameClass}>
                            {company.name.split(' ')[0]} 
                            <br /> {company.name.split(' ')[1]}
                        </h3>}
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}

export default Companies
