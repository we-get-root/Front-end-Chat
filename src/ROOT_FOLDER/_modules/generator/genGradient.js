export const dataGradient = {
  _gradient: [
    'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
    'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)',
    'linear-gradient(120deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(120deg, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(120deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(120deg, #30cfd0 0%, #330867 100%)',
    'linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)',
    'linear-gradient(120deg, #7028e4 0%, #e5b2ca 100%)',
    'linear-gradient(120deg, #ff0844 0%, #ffb199 100%)',
  ],
  generator: function (str) {
    const index = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const result = Math.ceil(index.indexOf(str.toLowerCase()) / 3)
    return this._gradient[result]
  }
}
