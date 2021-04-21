import regressions from 'regression'
import regress from 'multiregress'
import { round } from 'mathjs'
/**
 *
 * @param {*} req
 * @param {*} res
 */
const CvS = (A) => {
    A = A.split('↵')
    let convert = ''
    A.map((r) => {
        convert = convert + r
    })
    return convert
}
export const lin = (req, res) => {
    const { A, p } = req.body
    const mA = JSON.parse(CvS(A))
    const pre = JSON.parse(p)
    let result = regressions.linear(mA).predict(pre)
    res.json({ answer: result })
}
export const poly = (req, res) => {
    const { A, o } = req.body
    const mA = JSON.parse(CvS(A))
    const orde = JSON.parse(o)
    let result = regressions.polynomial(mA, { order: orde })
    res.json({ answer: result })
}
export const multi = (req, res) => {
    const { A } = req.body
    const mA = JSON.parse(CvS(A))
    let result = regress.regression(mA)
    res.json({ answer: round(result) })
}
