import { derivative, simplify, evaluate } from 'mathjs'
/**
 *
 * @param {'express'} req
 * @param {'express'} res
 */
export const Bisection = (req, res) => {
    const { eq, L, R, error } = req.body
    let xl = parseFloat(L)
    let xr = parseFloat(R)
    let er = 10
    let err
    if (error === null || error === '') {
        err = 0.000001
    } else {
        err = parseFloat(error)
    }
    let xm
    let fx = (x) => {
        let equation = simplify(eq).toString()
        return evaluate(equation, { x })
    }
    let ite = []
    let it = 1
    while (er > err) {
        xm = (xr + xl) / 2
        ite.push({ it, xl, xr, xm, er, prot: fx(xm), p: xm })
        it++
        if (fx(xm) * fx(xr) > 0) {
            er = Math.abs((xm - xr) / xm)
            xr = xm
        } else {
            er = Math.abs((xm - xl) / xm)
            xl = xm
        }
    }
    res.json({
        answer: xm,
        iteration: ite,
    })
}
export const Falsepositions = (req, res) => {
    const { eq, L, R, error } = req.body
    let xl = parseFloat(L)
    let xr = parseFloat(R)
    let er = 10
    let err
    if (error === null || error === '') {
        err = 0.000001
    } else {
        err = parseFloat(error)
    }
    let x1
    let ind = 1
    let f = (x) => {
        let equation = simplify(eq).toString()
        return evaluate(equation, { x })
    }
    let ite = []
    while (er > err) {
        x1 = (xl * f(xr) - xr * f(xl)) / (f(xr) - f(xl))
        ite.push({ ind, xl, xr, x1, er, prot: f(x1), p: x1 })
        ind++
        if (f(x1) * f(xr) < 0) {
            er = Math.abs((x1 - xr) / x1)
            xr = x1
        } else {
            er = Math.abs((x1 - xl) / x1)
            xl = x1
        }
    }
    res.json({
        answer: x1,
        iteration: ite,
    })
}
export const Onepoint = (req, res) => {
    const { eq, start, error } = req.body
    let fx = (x) => {
        let equation = simplify(eq).toString()
        return evaluate(equation, { x })
    }
    let er = 10
    let err
    if (error === null || error === '') {
        err = 0.000001
    } else {
        err = parseFloat(error)
    }
    let x = parseFloat(start)
    let xi = x
    let check = false
    let ite = []
    let it = 1
    while (er > err) {
        xi = fx(xi)
        ite.push({ it, xi, x, er, prot: fx(xi), p: xi })
        it++
        er = Math.abs((xi - x) / xi)
        x = xi
    }
    if (fx(x) - x < 0.000001) {
        check = true
    }
    res.json({
        answer: x,
        iteration: ite,
        check: check,
    })
}
export const NewtonRap = (req, res) => {
    const { eq, start, error } = req.body
    let xi = parseFloat(start)
    let err
    if (error === null || error === '') {
        err = 0.000001
    } else {
        err = parseFloat(error)
    }
    let f1 = (x) => {
        let equation = simplify(eq).toString()
        return evaluate(equation, { x })
    }
    let f2 = (x) => {
        let diff = derivative(eq, 'x').toString()
        diff = simplify(diff).toString()
        return evaluate(diff, { x })
    }
    let er = 10
    let cal = 0
    let i = 1
    let ite = []
    while (er > err) {
        cal = xi
        xi = xi - f1(xi) / f2(xi)
        let c1 = f1(xi)
        let c2 = f2(xi)
        ite.push({ i, xi, c1, c2, er, prot: cal, p: xi })
        i++
        er = Math.abs((xi - cal) / xi)
    }
    res.json({
        answer: xi,
        iteration: ite,
    })
}
export const Secant = (req, res) => {
    const { eq, start, range, error } = req.body
    let x0 = parseFloat(start)
    let d = parseFloat(range)
    let err
    if (error === null || error === '') {
        err = 0.000001
    } else {
        err = parseFloat(error)
    }
    let fx = (x) => {
        let equation = simplify(eq).toString()
        return evaluate(equation, { x })
    }
    let cx = (x, y) => {
        return fx(x) - fx(y)
    }
    let er = 10
    let x = x0 + d
    let y = x
    let i = 1
    let ite = []
    while (er > err) {
        x = x - (fx(x) * (x - x0)) / cx(x, x0)
        ite.push({ i, x, y, er, prot: y, p: x })
        er = Math.abs((x - x0) / x)
        i++
        x0 = y
        y = x
    }
    res.json({
        answer: x,
        iteration: ite,
    })
}
