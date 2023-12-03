function getLocalStorage(key) {
  let res = JSON.parse(localStorage.getItem(key))
  return res
}
function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

let defaultRules = {
  DanSha: 5,
  BeiDanSha: -20,

  Ying: 10,
  Shu: -20,

  JiSha: 1,
  SiWang: -5,

  MVPBeiShu: 2,

  NoDie: 20,
  DNoDie: -20,

  ChaoShen: 20,
  DChaoShen: -20,
  ChaoGui: -50,
  DChaoGui: 20,

  SanSha: 10,
  DSanSha: -10,
  SiSha: 30,
  DSiSha: -30,
  WuSha: 100,
  DWuSha: -100,
}


let rules = getLocalStorage('rules') || defaultRules

let domDanSha = document.querySelector('#DanShaInput')
let domBeiDanSha = document.querySelector('#BeiDanShaInput')

let domYing = document.querySelector('#YingInput')
let domShu = document.querySelector('#ShuInput')

let domJiSha = document.querySelector('#JiShaInput')
let domSiWang = document.querySelector('#SiWangInput')

let domMVPBeiShu = document.querySelector('#MVPBeiShuInput')

let domNoDie = document.querySelector('#NoDieInput')
let domDNoDie = document.querySelector('#DNoDieInput')

let domChaoShen = document.querySelector('#ChaoShenInput')
let domDChaoShen = document.querySelector('#DChaoShenInput')
let domChaoGui = document.querySelector('#ChaoGuiInput')
let domDChaoGui = document.querySelector('#DChaoGuiInput')

let domSanSha = document.querySelector('#SanShaInput')
let domSiSha = document.querySelector('#SiShaInput')
let domWuSha = document.querySelector('#WuShaInput')
let domDSanSha = document.querySelector('#DSanShaInput')
let domDSiSha = document.querySelector('#DSiShaInput')
let domDWuSha = document.querySelector('#DWuShaInput')

function updateDom() {
  domDanSha.value = rules.DanSha
  domBeiDanSha.value = rules.BeiDanSha

  domYing.value = rules.Ying
  domShu.value = rules.Shu

  domJiSha.value = rules.JiSha
  domSiWang.value = rules.SiWang

  domMVPBeiShu.value = rules.MVPBeiShu

  domNoDie.value = rules.NoDie
  domDNoDie.value = rules.DNoDie

  domChaoShen.value = rules.ChaoShen
  domDChaoShen.value = rules.DChaoShen
  domChaoGui.value = rules.ChaoGui
  domDChaoGui.value = rules.DChaoGui

  domSanSha.value = rules.SanSha
  domSiSha.value = rules.SiSha
  domWuSha.value = rules.WuSha
  domDSanSha.value = rules.DSanSha
  domDSiSha.value = rules.DSiSha
  domDWuSha.value = rules.DWuSha

}

updateDom()

function updateRules() {
  rules.DanSha = domDanSha.value
  rules.BeiDanSha = domBeiDanSha.value

  rules.Ying = domYing.value
  rules.Shu = domShu.value

  rules.JiSha = domJiSha.value
  rules.SiWang = domSiWang.value

  rules.MVPBeiShu = domMVPBeiShu.value || 1

  rules.NoDie = domNoDie.value
  rules.DNoDie = domDNoDie.value

  rules.ChaoShen = domChaoShen.value
  rules.DChaoShen = domDChaoShen.value
  rules.ChaoGui = domChaoGui.value
  rules.DChaoGui = domDChaoGui.value

  rules.SanSha = domSanSha.value
  rules.SiSha = domSiSha.value
  rules.WuSha = domWuSha.value
  rules.DSanSha = domDSanSha.value
  rules.DSiSha = domDSiSha.value
  rules.DWuSha = domDWuSha.value
}

let domSave = document.querySelector('#save')
let domSavePopup = document.querySelector('#savePopup')
let domClose = document.querySelector('#savePopup .close')

domSave.addEventListener('click', function () {
  updateRules()
  setLocalStorage('rules', rules)
  domSavePopup.style.visibility = 'visible'
})

domClose.addEventListener('click', function () {
  domSavePopup.style.visibility = 'hidden'
})








function debounce(fn, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function updateDanShaNum(type) {
  if (type !== 100) {
    DanShaNum = rules.DanSha * domDanShaNum.value
    domShowDanShaNum.innerHTML = '+' + DanShaNum
  } else {
    DanShaNum = 0
    domShowDanShaNum.innerHTML = ''
    domDanShaNum.value = ''
  }
}

function updateBeiDanShaNum(type) {
  if (type !== 100) {
    BeiDanShaNum = rules.BeiDanSha * domBeiDanShaNum.value
    domShowBeiDanShaNum.innerHTML = '-' + (-BeiDanShaNum)
  } else {
    BeiDanShaNum = 0
    domShowBeiDanShaNum.innerHTML = ''
    domBeiDanShaNum.value = ''
  }

}

function updateYSnum(type) {
  if (type !== 100) {
    gameState = !gameState

    if (gameState) {
      YSnum = rules.Ying
      domShowYS.innerHTML = '+' + YSnum

      domYSbtn.classList.remove('failYSbtn')
      domYSbtn.classList.add('successYSbtn')

      domCircle.classList.remove('rightCircle')
      domCircle.classList.add('leftCircle')

      domShowYS.classList.remove('failColor')
      domShowYS.classList.add('successColor')

    } else {
      YSnum = rules.Shu
      domShowYS.innerHTML = YSnum

      domYSbtn.classList.remove('successYSbtn')
      domYSbtn.classList.add('failYSbtn')

      domCircle.classList.remove('leftCircle')
      domCircle.classList.add('rightCircle')

      domShowYS.classList.remove('successColor')
      domShowYS.classList.add('failColor')


    }
  } else {
    gameState = true

    YSnum = rules.Ying
    domShowYS.innerHTML = '+' + YSnum

    domYSbtn.classList.remove('failYSbtn')
    domYSbtn.classList.add('successYSbtn')

    domCircle.classList.remove('rightCircle')
    domCircle.classList.add('leftCircle')

    domShowYS.classList.remove('failColor')
    domShowYS.classList.add('successColor')
  }

}

function updateJiShaNum(type) {
  if (type !== 100) {
    JiShaNum = rules.JiSha * domJiShaNum.value
    if (MVPstate) {
      JiShaNum = JiShaNum * rules.MVPBeiShu
    }
    domShowJiShaNum.innerHTML = '+' + JiShaNum
  } else {
    JiShaNum = 0
    domShowJiShaNum.innerHTML = ''
    domJiShaNum.value = ''
  }
}

function updateMVPstate(type) {
  if (type !== 100) {
    MVPstate = !MVPstate
    if (MVPstate) {
      JiShaNum = JiShaNum * rules.MVPBeiShu || 0
      domMVPbtn.classList.add('commonbtnSuccess')
    } else {
      JiShaNum = JiShaNum / rules.MVPBeiShu || 0
      domMVPbtn.classList.remove('commonbtnSuccess')
    }
    domShowJiShaNum.innerHTML = '+' + JiShaNum
  } else {
    MVPstate = false
    domMVPbtn.classList.remove('commonbtnSuccess')
  }
}

function updateSiWangNum(type) {
  if (type !== 100) {
    SiWangNum = rules.SiWang * domSiWangNum.value
    domShowSiWangNum.innerHTML = '-' + (-SiWangNum)
  } else {
    SiWangNum = 0
    domShowSiWangNum.innerHTML = ''
    domSiWangNum.value = ''
  }
}

function updateDJiShaNum(type) {
  if (type !== 100) {
    DJiShaNum = domDJiShaNum.value
    if (DMVPstate) {
      DJiShaNum = DJiShaNum * rules.MVPBeiShu
    }
    DJiShaNum = - DJiShaNum
    domShowDJiShaNum.innerHTML = '-' + (- DJiShaNum)
  } else {
    DJiShaNum = 0
    domShowDJiShaNum.innerHTML = ''
    domDJiShaNum.value = ''
  }
}

function updateDMVPstate(type) {
  if (type !== 100) {
    DMVPstate = !DMVPstate
    if (DMVPstate) {
      DJiShaNum = DJiShaNum * rules.MVPBeiShu || 0
      domDMVPbtn.classList.add('commonbtnFail')
    } else {
      DJiShaNum = DJiShaNum / rules.MVPBeiShu || 0
      domDMVPbtn.classList.remove('commonbtnFail')
    }
    domShowDJiShaNum.innerHTML = '-' + (- DJiShaNum)
  } else {
    DMVPstate = false
    domDMVPbtn.classList.remove('commonbtnFail')
  }
}

function updateNoDieState(type) {
  if (type !== 100) {
    NoDieState = !NoDieState
    if (NoDieState) {
      NoDieNum = rules.NoDie
      domNoDiebtn.classList.add('commonbtnSuccess')
    } else {
      NoDieNum = 0
      domNoDiebtn.classList.remove('commonbtnSuccess')
    }
    domShowNoDieNum.innerHTML = '+' + NoDieNum
  } else {
    NoDieNum = 0
    NoDieState = false
    domNoDiebtn.classList.remove('commonbtnSuccess')
    domShowNoDieNum.innerHTML = ''
  }
}

function updateDNoDieState(type) {
  if (type !== 100) {
    DNoDieState = !DNoDieState
    if (DNoDieState) {
      DNoDieNum = rules.DNoDie
      domDNoDiebtn.classList.add('commonbtnFail')
    } else {
      DNoDieNum = 0
      domDNoDiebtn.classList.remove('commonbtnFail')
    }
    domShowDNoDieNum.innerHTML = '-' + (-DNoDieNum)
  } else {
    DNoDieNum = 0
    DNoDieState = false
    domDNoDiebtn.classList.remove('commonbtnFail')
    domShowDNoDieNum.innerHTML = ''
  }
}

function updateChaoShenState(type) {
  if (type !== 100) {
    ChaoShenState = !ChaoShenState
    if (ChaoShenState) {
      ChaoShenNum = rules.ChaoShen
      domChaoShenbtn.classList.add('commonbtnSuccess')
    } else {
      ChaoShenNum = 0
      domChaoShenbtn.classList.remove('commonbtnSuccess')
    }
    domShowChaoShenNum.innerHTML = '+' + ChaoShenNum
  } else {
    ChaoShenNum = 0
    ChaoShenState = false
    domChaoShenbtn.classList.remove('commonbtnSuccess')
    domShowChaoShenNum.innerHTML = ''
  }
}

function updateDChaoShenState(type) {
  if (type !== 100) {
    DChaoShenState = !DChaoShenState
    if (DChaoShenState) {
      DChaoShenNum = rules.DChaoShen
      domDChaoShenbtn.classList.add('commonbtnFail')
    } else {
      DChaoShenNum = 0
      domDChaoShenbtn.classList.remove('commonbtnFail')
    }
    domShowDChaoShenNum.innerHTML = '-' + (-DChaoShenNum)
  } else {
    DChaoShenNum = 0
    DChaoShenState = false
    domDChaoShenbtn.classList.remove('commonbtnFail')
    domShowDChaoShenNum.innerHTML = ''
  }
}

function updateChaoGuiState(type) {
  if (type !== 100) {
    ChaoGuiState = !ChaoGuiState
    if (ChaoGuiState) {
      ChaoGuiNum = rules.ChaoGui
      domChaoGuibtn.classList.add('commonbtnFail')
    } else {
      ChaoGuiNum = 0
      domChaoGuibtn.classList.remove('commonbtnFail')
    }
    domShowChaoGuiNum.innerHTML = '-' + (-ChaoGuiNum)
  } else {
    ChaoGuiNum = 0
    ChaoGuiState = false
    domChaoGuibtn.classList.remove('commonbtnFail')
    domShowChaoGuiNum.innerHTML = ''
  }
}

function updateDChaoGuiState(type) {
  if (type !== 100) {
    DChaoGuiState = !DChaoGuiState
    if (DChaoGuiState) {
      DChaoGuiNum = rules.DChaoGui
      domDChaoGuibtn.classList.add('commonbtnSuccess')
    } else {
      DChaoGuiNum = 0
      domDChaoGuibtn.classList.remove('commonbtnSuccess')
    }
    domShowDChaoGuiNum.innerHTML = '+' + DChaoGuiNum
  } else {
    DChaoGuiNum = 0
    DChaoGuiState = false
    domDChaoGuibtn.classList.remove('commonbtnSuccess')
    domShowDChaoGuiNum.innerHTML = ''
  }
}

function updateSanShaState(type) {
  if (type !== 100) {
    SanShaState = !SanShaState
    if (SanShaState) {
      SanShaNum = rules.SanSha
      domSanShabtn.classList.add('commonbtnSuccess')
    } else {
      SanShaNum = 0
      domSanShabtn.classList.remove('commonbtnSuccess')
    }
    domShowSanShaNum.innerHTML = '+' + SanShaNum
  } else {
    SanShaNum = 0
    SanShaState = false
    domSanShabtn.classList.remove('commonbtnSuccess')
    domShowSanShaNum.innerHTML = ''
  }
}

function updateDSanShaState(type) {
  if (type !== 100) {
    DSanShaState = !DSanShaState
    if (DSanShaState) {
      DSanShaNum = rules.DSanSha
      domDSanShabtn.classList.add('commonbtnFail')
    } else {
      DSanShaNum = 0
      domDSanShabtn.classList.remove('commonbtnFail')
    }
    domShowDSanShaNum.innerHTML = '-' + (-DSanShaNum)
  } else {
    DSanShaNum = 0
    DSanShaState = false
    domDSanShabtn.classList.remove('commonbtnFail')
    domShowDSanShaNum.innerHTML = ''
  }
}

function updateSiShaState(type) {
  if (type !== 100) {
    SiShaState = !SiShaState
    if (SiShaState) {
      SiShaNum = rules.SiSha
      domSiShabtn.classList.add('commonbtnSuccess')
    } else {
      SiShaNum = 0
      domSiShabtn.classList.remove('commonbtnSuccess')
    }
    domShowSiShaNum.innerHTML = '+' + SiShaNum
  } else {
    SiShaNum = 0
    SiShaState = false
    domSiShabtn.classList.remove('commonbtnSuccess')
    domShowSiShaNum.innerHTML = ''
  }
}

function updateDSiShaState(type) {
  if (type !== 100) {
    DSiShaState = !DSiShaState
    if (DSiShaState) {
      DSiShaNum = rules.DSiSha
      domDSiShabtn.classList.add('commonbtnFail')
    } else {
      DSiShaNum = 0
      domDSiShabtn.classList.remove('commonbtnFail')
    }
    domShowDSiShaNum.innerHTML = '-' + (-DSiShaNum)
  } else {
    DSiShaNum = 0
    DSiShaState = false
    domDSiShabtn.classList.remove('commonbtnFail')
    domShowDSiShaNum.innerHTML = ''
  }
}

function updateWuShaState(type) {
  if (type !== 100) {
    WuShaState = !WuShaState
    if (WuShaState) {
      WuShaNum = rules.WuSha
      domWuShabtn.classList.add('commonbtnSuccess')
    } else {
      WuShaNum = 0
      domWuShabtn.classList.remove('commonbtnSuccess')
    }
    domShowWuShaNum.innerHTML = '+' + WuShaNum
  } else {
    WuShaNum = 0
    WuShaState = false
    domWuShabtn.classList.remove('commonbtnSuccess')
    domShowWuShaNum.innerHTML = ''
  }
}

function updateDWuShaState(type) {
  if (type !== 100) {
    DWuShaState = !DWuShaState
    if (DWuShaState) {
      DWuShaNum = rules.DWuSha
      domDWuShabtn.classList.add('commonbtnFail')
    } else {
      DWuShaNum = 0
      domDWuShabtn.classList.remove('commonbtnFail')
    }
    domShowDWuShaNum.innerHTML = '-' + (-DWuShaNum)
  } else {
    DWuShaNum = 0
    DWuShaState = false
    domDWuShabtn.classList.remove('commonbtnFail')
    domShowDWuShaNum.innerHTML = ''
  }
}


let domDanShaNum = document.querySelector('#DanShaNumInput')
let domShowDanShaNum = document.querySelector('#showDanShaNum')
let DanShaNum = 0
domDanShaNum.addEventListener('input', debounce(updateDanShaNum, 300))



let domBeiDanShaNum = document.querySelector('#BeiDanShaNumInput')
let domShowBeiDanShaNum = document.querySelector('#showBeiDanShaNum')
let BeiDanShaNum = 0
domBeiDanShaNum.addEventListener('input', debounce(updateBeiDanShaNum, 300))




let domYSbtn = document.querySelector('#YSbtn')
let domCircle = document.querySelector('#YSbtn .circle')
let domShowYS = document.querySelector('#showYS')
let gameState = true
let YSnum = rules.Ying
domShowYS.innerHTML = '+' + YSnum
domYSbtn.addEventListener('click', updateYSnum)




let domJiShaNum = document.querySelector('#JiShaNumInput')
let domShowJiShaNum = document.querySelector('#showJiShaNum')
let JiShaNum = 0
domJiShaNum.addEventListener('input', debounce(updateJiShaNum, 300))

let MVPstate = false
let domMVPbtn = document.querySelector('#MVPbtn')
domMVPbtn.addEventListener('click', updateMVPstate)




let domSiWangNum = document.querySelector('#SiWangNumInput')
let domShowSiWangNum = document.querySelector('#showSiWangNum')
let SiWangNum = 0
domSiWangNum.addEventListener('input', debounce(updateSiWangNum, 300))



let domDJiShaNum = document.querySelector('#DJiShaNumInput')
let domShowDJiShaNum = document.querySelector('#showDJiShaNum')
let DJiShaNum = 0
domDJiShaNum.addEventListener('input', debounce(updateDJiShaNum, 300))

let DMVPstate = false
let domDMVPbtn = document.querySelector('#DMVPbtn')
domDMVPbtn.addEventListener('click', updateDMVPstate)


let NoDieNum = 0
let NoDieState = false
let domNoDiebtn = document.querySelector('#NoDiebtn')
let domShowNoDieNum = document.querySelector('#showNoDieNum')
domNoDiebtn.addEventListener('click', updateNoDieState)



let DNoDieNum = 0
let DNoDieState = false
let domDNoDiebtn = document.querySelector('#DNoDiebtn')
let domShowDNoDieNum = document.querySelector('#showDNoDieNum')
domDNoDiebtn.addEventListener('click', updateDNoDieState)


let ChaoShenNum = 0
let ChaoShenState = false
let domChaoShenbtn = document.querySelector('#ChaoShenbtn')
let domShowChaoShenNum = document.querySelector('#showChaoShenNum')
domChaoShenbtn.addEventListener('click', updateChaoShenState)


let DChaoShenNum = 0
let DChaoShenState = false
let domDChaoShenbtn = document.querySelector('#DChaoShenbtn')
let domShowDChaoShenNum = document.querySelector('#showDChaoShenNum')
domDChaoShenbtn.addEventListener('click', updateDChaoShenState)


let ChaoGuiNum = 0
let ChaoGuiState = false
let domChaoGuibtn = document.querySelector('#ChaoGuibtn')
let domShowChaoGuiNum = document.querySelector('#showChaoGuiNum')
domChaoGuibtn.addEventListener('click', updateChaoGuiState)


let DChaoGuiNum = 0
let DChaoGuiState = false
let domDChaoGuibtn = document.querySelector('#DChaoGuibtn')
let domShowDChaoGuiNum = document.querySelector('#showDChaoGuiNum')
domDChaoGuibtn.addEventListener('click', updateDChaoGuiState)


let SanShaNum = 0
let SanShaState = false
let domSanShabtn = document.querySelector('#SanShabtn')
let domShowSanShaNum = document.querySelector('#showSanShaNum')
domSanShabtn.addEventListener('click', updateSanShaState)

let DSanShaNum = 0
let DSanShaState = false
let domDSanShabtn = document.querySelector('#DSanShabtn')
let domShowDSanShaNum = document.querySelector('#showDSanShaNum')
domDSanShabtn.addEventListener('click', updateDSanShaState)


let SiShaNum = 0
let SiShaState = false
let domSiShabtn = document.querySelector('#SiShabtn')
let domShowSiShaNum = document.querySelector('#showSiShaNum')
domSiShabtn.addEventListener('click', updateSiShaState)

let DSiShaNum = 0
let DSiShaState = false
let domDSiShabtn = document.querySelector('#DSiShabtn')
let domShowDSiShaNum = document.querySelector('#showDSiShaNum')
domDSiShabtn.addEventListener('click', updateDSiShaState)


let WuShaNum = 0
let WuShaState = false
let domWuShabtn = document.querySelector('#WuShabtn')
let domShowWuShaNum = document.querySelector('#showWuShaNum')
domWuShabtn.addEventListener('click', updateWuShaState)


let DWuShaNum = 0
let DWuShaState = false
let domDWuShabtn = document.querySelector('#DWuShabtn')
let domShowDWuShaNum = document.querySelector('#showDWuShaNum')
domDWuShabtn.addEventListener('click', updateDWuShaState)


let domReset = document.querySelector('.reset')
let domCompute = document.querySelector('.compute')
let domTotal = document.querySelector('.total')

domReset.addEventListener('click', function () {
  updateDanShaNum(100)
  updateBeiDanShaNum(100)
  updateYSnum(100)
  updateJiShaNum(100)
  updateMVPstate(100)
  updateSiWangNum(100)
  updateDJiShaNum(100)
  updateDMVPstate(100)
  updateNoDieState(100)
  updateDNoDieState(100)
  updateChaoShenState(100)
  updateDChaoShenState(100)
  updateChaoGuiState(100)
  updateDChaoGuiState(100)
  updateSanShaState(100)
  updateDSanShaState(100)
  updateSiShaState(100)
  updateDSiShaState(100)
  updateWuShaState(100)
  updateDWuShaState(100)

  domTotal.innerHTML = ''
})

domCompute.addEventListener('click', function () {
  let a = DanShaNum * 1 + BeiDanShaNum * 1 + YSnum * 1 + JiShaNum * 1 + SiWangNum * 1 + DJiShaNum * 1
  let b = NoDieNum * 1 + DNoDieNum * 1 + ChaoShenNum * 1 + DChaoShenNum * 1 + ChaoGuiNum * 1 + DChaoGuiNum * 1
  let c = SanShaNum * 1 + DSanShaNum * 1 + SiShaNum * 1 + DSiShaNum * 1 + WuShaNum * 1 + DWuShaNum * 1

  let total = a + b + c
  if (total < 0) {
    domTotal.classList.remove('successColor')
    domTotal.classList.add('failColor')
    domTotal.innerHTML = total
  } else {
    domTotal.classList.remove('failColor')
    domTotal.classList.add('successColor')
    domTotal.innerHTML = '+' + total
  }
})
