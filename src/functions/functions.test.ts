import { it, expect, describe, test } from 'vitest';
import { commonKeys, compareObjectArrays, compareObjects } from './functions';


describe("Compare Objects",()=>{
    
    const x ={
        a:1,
        b: 2
    }

    const y ={
        a:1,
        b: 2
    }
    
    const z = {
        a:1, 
        b:3
    }
    const person1 ={
        name: "Alice",
        age: 23,
        job: "accountant"
    }

    const person2 ={
        name: "John",
        age: 30,
        job: "lawyer"
    }

    test("identical key value pairs", ()=>{
        expect(compareObjects(x,y)).toBe(true);
    })

    it("two different key value pairs", ()=>{
        expect(compareObjects(x,z)).toBe(false
        )
    })

    it("empty key values", ()=>{
        expect(compareObjects({},{})).toBe(true)
    })

    test("real value pairs", ()=>{
        expect(compareObjects(person1, person2)).toBe(false)
    })
})

describe("compareObjectArrays",()=>{

    const x :string[] = ['1','2','3','4']
    const y :string[] = ['1','2','3','4']
    const z :string[] = ['1','2','3','5']

    test("two identical arrays",()=>{
        expect(compareObjectArrays(x,y)).toBe(true)
    })

    it("two different arrays",()=>{
        expect(compareObjectArrays(x,z)).toBe(false)
    })

    test("empty arrays", ()=>{
        expect(compareObjectArrays([], [])).toBe(true)
    })
})

describe("commonKeys", ()=>{
     const x={
        a:1,
        b:2,
        c:3
     }
     
     const y={
        a:1, 
        b:2,
        c:3
     }

     const z ={
        z:2,
        c:2,
        f:3
     }

     const a={
        g:2,
        h:2,
        k:3
     }
     it("returns all  of 'em", ()=>{
        expect(commonKeys(x, y)).toEqual(['a', 'b', 'c'])
     })

     test("returns 'c' ", ()=>{
        expect(commonKeys(x,z)).toEqual(['c'])
     })

     it("returns empty string",()=>{
        expect(commonKeys(x, a)).toEqual([])
     })

     it("returns empty string",()=>{
        expect(commonKeys({}, {})).toEqual([])
     })
})