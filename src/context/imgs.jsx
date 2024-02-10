// c1
import c1qs1 from "/sem4/c1qs/1.jpg"
import c1qs2 from "/sem4/c1qs/2.jpg"
import c1qs3 from "/sem4/c1qs/3.jpg"
import c1qs4 from "/sem4/c1qs/4.jpg"
import c1qs5 from "/sem4/c1qs/5.png"

// c2
import c2qs1 from '/sem4/c2qs/1.png'
import c2qs2 from '/sem4/c2qs/2.png'
import c2qs3 from '/sem4/c2qs/3.png'
import c2qs4 from '/sem4/c2qs/4.png'
import c2ans1 from '/sem4/c2ans/1.jpg'
import c2ans2 from '/sem4/c2ans/2.jpg'
import c2ans3 from '/sem4/c2ans/3.jpg'
import c2ans4 from '/sem4/c2ans/4.jpg'
import c2ans5 from '/sem4/c2ans/5.jpg'
import c2ans6 from '/sem4/c2ans/6.jpg'
import c2ans7 from '/sem4/c2ans/7.jpg'
import c2ans8 from '/sem4/c2ans/8.jpg'
import c2ans9 from '/sem4/c2ans/9.jpg'
import c2ans10 from '/sem4/c2ans/10.jpg'
import c2ans11 from '/sem4/c2ans/11.jpg'
import c2ans12 from '/sem4/c2ans/12.jpg'
import c2ans13 from '/sem4/c2ans/13.jpg'
import c2ans14 from '/sem4/c2ans/14.jpg'
import c2ans15 from '/sem4/c2ans/15.jpg'

// e1
import e1qs1 from '/sem4/e1qs/1.png'
import e1qs2 from '/sem4/e1qs/2.png'
import e1qs3 from '/sem4/e1qs/3.png'
import e1qs4 from '/sem4/e1qs/4.png'

// e2
import e2qs1 from '/sem4/e2qs/1.png'
import e2qs2 from '/sem4/e2qs/2.png'
import e2qs3 from '/sem4/e2qs/3.png'
import e2qs4 from '/sem4/e2qs/4.png'

// m1
import m1qs1 from '/sem4/m1qs/1.png'
import m1qs2 from '/sem4/m1qs/2.png'
import m1qs3 from '/sem4/m1qs/3.png'
import m1qs4 from '/sem4/m1qs/4.png'

// m2
import m2qs1 from '/sem4/m2qs/1.png'
import m2qs2 from '/sem4/m2qs/2.png'
import m2qs3 from '/sem4/m2qs/3.png'
import m2qs4 from '/sem4/m2qs/4.png'
import m2qs5 from '/sem4/m2qs/5.png'
import m2qs6 from '/sem4/m2qs/6.png'
import m2qs7 from '/sem4/m2qs/7.png'
import m2qs8 from '/sem4/m2qs/8.png'
import m2ans1 from '/sem4/m2ans/1.jpg'
import m2ans2 from '/sem4/m2ans/2.jpg'
import m2ans3 from '/sem4/m2ans/3.jpg'
import m2ans4 from '/sem4/m2ans/4.jpg'
import m2ans5 from '/sem4/m2ans/5.jpg'
import m2ans6 from '/sem4/m2ans/6.jpg'

// semc2
import sem3c2qs1 from '/sem3/c2qs/1.jpg'
import sem3c2qs2 from '/sem3/c2qs/2.jpg'
import sem3c2qs3 from '/sem3/c2qs/3.jpg'
import sem3c2qs4 from '/sem3/c2qs/4.jpg'
import sem3c2ans1 from '/sem3/c2ans/1.jpg'
import sem3c2ans2 from '/sem3/c2ans/2.jpg'
import sem3c2ans3 from '/sem3/c2ans/3.jpg'
import sem3c2ans4 from '/sem3/c2ans/4.jpg'

import { createContext } from "react"

export const ImgsContext = createContext(null)

export const ImgsProvider = (props) => {
    // qs
    const c1qs = [c1qs1, c1qs2, c1qs3, c1qs4, c1qs5]
    const c2qs = [c2qs1, c2qs2, c2qs3, c2qs4]
    const m1qs = [m1qs1, m1qs2, m1qs3, m1qs4]
    const m2qs = [m2qs1, m2qs2, m2qs3, m2qs4, m2qs5, m2qs6, m2qs7, m2qs8]
    const e1qs = [e1qs1, e1qs2, e1qs3, e1qs4]
    const e2qs = [e2qs1, e2qs2, e2qs3, e2qs4]
    const sem3c2qs = [sem3c2qs4, sem3c2qs3, sem3c2qs2, sem3c2qs1]
    // ans
    const m2ans = [m2ans1, m2ans2, m2ans3, m2ans4, m2ans5, m2ans6]
    const c2ans = [c2ans1, c2ans2, c2ans3, c2ans4, c2ans5, c2ans6, c2ans7, c2ans8, c2ans9, c2ans10,
        c2ans11, c2ans12, c2ans13, c2ans14, c2ans15]
    const sem3c2ans = [sem3c2ans1, sem3c2ans2, sem3c2ans3, sem3c2ans4]

    // booklinks
    const c1link = 'https://www.kopykitab.com/index.php?route=pdfviewer/view&product_id=57565&parent_id=5950204'
    const c2link = 'https://www.kopykitab.com/index.php?route=pdfviewer/view&product_id=57566&parent_id=5950204'
    const m1link = 'https://www.kopykitab.com/index.php?route=pdfviewer/view&product_id=57567&parent_id=5950204'
    const m2link = 'https://www.kopykitab.com/index.php?route=pdfviewer/view&product_id=57568&parent_id=5950204'
    const e1link = 'https://www.kopykitab.com/index.php?route=pdfviewer/view&product_id=57569&parent_id=5950204'
    const sem3c2link = 'https://www.kopykitab.com/index.php?route=pdfviewer/view&product_id=54799&parent_id=5950204'

    return (
        <ImgsContext.Provider value={{
            c1qs, c2qs, m1qs, m2qs, e1qs, e2qs, sem3c2qs, m2ans, c2ans, sem3c2ans, c1link, c2link, m1link, 
            m2link, e1link, sem3c2link
        }} >
            {props.children}
        </ImgsContext.Provider>
    )
}