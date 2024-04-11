
import { createContext, useState } from "react"
export const ImgsContext = createContext(null)

import {

    sem1c1, sem1c2, sem1m1, sem1m2, sem1e1, sem1e2, sem1s1, sem1s2,
    sem2c1, sem2c2, sem2m1, sem2m2, sem2e1, sem2e2, sem2s1, sem2s2,

    sem3c1, sem3c2, sem3m1, sem3m2, sem3e1, sem3e2, sem3eng, sem3evs,
    sem4c1, sem4c2, sem4m1, sem4m2, sem4e1, sem4e2, sem4eng, sem4evs,

    sem5bc, sem5cn2, sem5ds, sem5java1, sem5os1, sem5ptn, sem5thecs, sem5wt1,
    sem6com, sem6danalytics, sem6java2, sem6os2, sem6softtest, sem6softtest_tools, sem6wt2

} from './imgimport'

export const ImgsProvider = (props) => {

    const [current, setCurrent] = useState([])


    return (
        <ImgsContext.Provider value={{
            sem1c1, sem1c2, sem1m1, sem1m2, sem1e1, sem1e2, sem1s1, sem1s2,
            sem2c1, sem2c2, sem2m1, sem2m2, sem2e1, sem2e2, sem2s1, sem2s2,

            sem3c1, sem3c2, sem3m1, sem3m2, sem3e1, sem3e2, sem3eng, sem3evs,
            sem4c1, sem4c2, sem4m1, sem4m2, sem4e1, sem4e2, sem4eng, sem4evs,

            sem5bc, sem5cn2, sem5ds, sem5java1, sem5os1, sem5ptn, sem5thecs, sem5wt1,
            sem6com, sem6danalytics, sem6java2, sem6os2, sem6softtest, sem6softtest_tools, sem6wt2,

            current, setCurrent
        }} >
            {props.children}
        </ImgsContext.Provider>
    )
}