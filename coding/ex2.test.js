const Symmetry = require("./ex2")

var chainTest = [
  // // case: true - length is odd
  {
    chain: "ABC1CBA",
    expect: true
  },
  {
    chain: "ABCD DCBA",
    expect: true
  },
  {
    chain: "1234321",
    expect: true
  },

  // // case: true - length is even
  {
    chain: "ABCCBA",
    expect: true
  },
  {
    chain: "ABCDDCBA",
    expect: true
  },
  {
    chain: "1234554321",
    expect: true
  },

  // case: fail
   {
    chain: "12312312323213213",
    expect: false
  },
  {
    chain: "2312898u98923",
    expect: false
  },
  {
    chain: "1234455321",
    expect: false
  },
  {
    chain: "1234111",
    expect: false
  },

  // case: null, undefine, false, '', NaN
  {
    chain: null,
    expect: "Input must be string"
  },
  {
    chain: undefined,
    expect: "Input must be string"
  },
  {
    chain: false,
    expect: "Input must be string"
  },
  {
    chain: '',
    expect: true,
  },
  {
    chain: NaN,
    expect: "Input must be string"
  },
]

chainTest.forEach(item => {
  if (typeof item.chain !== 'string') {
    expect(() => {
      new Symmetry(item.chain).isSymmetry
    }).toThrow(item.expect)
  } else {
    test(item.chain, () => {
        expect(new Symmetry(item.chain).isSymmetry).toBe(item.expect);
    });
  }
})

