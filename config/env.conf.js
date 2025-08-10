const argvs = process.argv.slice(2);

function getParams(key) {
  let item = argvs.find(item => item.split('=')[0] === key);
  return item ? item.split('=') : []
}

// multi module
class MultiModule {
  constructor(name, opts) {
    Object.assign(this, {
      name,
      host: '0.0.0.0',
      filename: '',
      title: '',
      lanKeys: 'en-us,zh-cn',
      server: 'https',
      receiveCurrency: 'USDT',
    }, opts)
  }
}

function getModuleProcess(name) {
  let mItem = importModules.find(item => item.name === name);
  return mItem || importModules[0];
}

/**  App configs **/
const importModules = [new MultiModule('tgApp', {
  port: 11000,
  filename: 'index.html',
  title: 'Vue Demo For Telegram (Ton Connect)',
  sysApp: 'tgApp',
  sysName: 'tg',
  appVersion: '4.0',
  dev: {
    staticURL: './',
    apiURL: 'https://53eb2148b9.srv.openad.network',
    tonURL: 'https://connect.tonhubapi.com',
    dist: 'dev',
    receiveAddress: '0QBqho3NgfG6GzmbkQOA3VAtIdBvaBfzEjr2HYgf7gLhH10v', // ton wallet testnet address, for receiving money
    USDTContract: 'kQAiboDEv_qRrcEdrYdwbVLNOXBHwShFbtKGbQVJ2OKxY_Di', // ton chain testnet USDT contract address
    TonRPCAddress: 'https://testnet.toncenter.com/api/v2/jsonRPC',
  },
  test: {
    staticURL: './',
    apiURL: 'https://53eb2148b9.srv.openad.network',
    webURL: 'https://tg.jm178.com.cn',
    dist: 'test',
    receiveAddress: '0QBqho3NgfG6GzmbkQOA3VAtIdBvaBfzEjr2HYgf7gLhH10v', // ton wallet testnet address, for receiving money
    USDTContract: 'kQAiboDEv_qRrcEdrYdwbVLNOXBHwShFbtKGbQVJ2OKxY_Di', // ton chain testnet USDT contract address
    TonRPCAddress: 'https://testnet.toncenter.com/api/v2/jsonRPC',
  },
  uat: {
    staticURL: './',
    apiURL: 'https://bf2055756e.srv.openad.network',
    webURL: 'https://bf2055756e.node.openad.network',
    dist: 'uat',
    receiveAddress: 'UQDHOor3ni08vZ50KSfWbG7dQNbwBa40UflaYzWHsctHqc_0', // ton wallet address, for receiving money
    USDTContract: 'UQArU2beaKn-m-are1Rv0KMICiX7120_RipdBDrt_IMjPeP2', // ton chain USDT contract address
    TonRPCAddress: 'https://toncenter.com/api/v2/jsonRPC',
  },
  prod: {
    staticURL: './',
    apiURL: 'https://bf2055756e.srv.openad.network',
    webURL: 'https://bf2055756e.node.openad.network',
    dist: 'prod',
    receiveAddress: 'UQDHOor3ni08vZ50KSfWbG7dQNbwBa40UflaYzWHsctHqc_0', // ton wallet address, for receiving money
    USDTContract: 'UQArU2beaKn-m-are1Rv0KMICiX7120_RipdBDrt_IMjPeP2', // ton chain USDT contract address
    TonRPCAddress: 'https://toncenter.com/api/v2/jsonRPC',
  },
}),new MultiModule('lineApp', {
  port: 12000,
  filename: 'index.html',
  title: 'Vue Demo For Line NEXT (Reown)',
  sysApp: 'lineApp',
  sysName: 'line',
  appVersion: '1.0',
  dev: {
    staticURL: './',
    apiURL: 'https://53eb2148b9.srv.openad.network',
    tonURL: 'https://connect.tonhubapi.com',
    dist: 'dev',
    receiveAddress: '0x419ca4beafcbcb4f106fdaab6dd49dea82eee3cc', // evm wallet address, for receiving money
    USDTContract: '0xdac17f958d2ee523a2206206994597c13d831ec7', // evm ERC-20 USDT contract address
    TonRPCAddress: '',
  },
  test: {
    staticURL: './',
    apiURL: 'https://53eb2148b9.srv.openad.network',
    webURL: 'https://line.jm178.com.cn',
    dist: 'test',
    receiveAddress: '0x419ca4beafcbcb4f106fdaab6dd49dea82eee3cc', // evm wallet address, for receiving money
    USDTContract: '0xdAC17F958D2ee523a2206206994597C13D831ec7', // evm ERC-20 USDT contract address
    TonRPCAddress: '',
  },
  uat: {
    staticURL: './',
    apiURL: 'https://6bf9546ea5.srv.openad.network',
    webURL: 'https://6bf9546ea5.node.openad.network',
    dist: 'uat',
    receiveAddress: '0x419ca4beafcbcb4f106fdaab6dd49dea82eee3cc', // evm wallet address, for receiving money
    USDTContract: '0xdAC17F958D2ee523a2206206994597C13D831ec7', // evm ERC-20 USDT contract address
    TonRPCAddress: '',
  },
  prod: {
    staticURL: './',
    apiURL: 'https://6bf9546ea5.srv.openad.network',
    webURL: 'https://6bf9546ea5.node.openad.network',
    dist: 'prod',
    receiveAddress: '0x419ca4beafcbcb4f106fdaab6dd49dea82eee3cc', // evm wallet address, for receiving money
    USDTContract: '0xdAC17F958D2ee523a2206206994597C13D831ec7', // evm ERC-20 USDT contract address
    TonRPCAddress: '',
  },
})];

let eventName = String(process.env.npm_lifecycle_event).split('-');
let moduleName = getParams('name')[1] || eventName[1];

const envConfig = {
  modules: importModules,
  process: getModuleProcess(moduleName),
  getNodeENV(obj) {
    return getENV('node', obj, envConfig.process);
  },
  getBuildENV(obj) {
    return getENV('build', obj, envConfig.process);
  },
};

function getENV(type, obj, params) {
  let item;
  for (let x in params) {
    item = params[x];
    if (typeof item === 'object' && x === JSON.parse(obj.prod)) {
      getENV(type, obj, item);
    }
    if (typeof item !== 'object') {
      if (type === 'node') {
        obj[x] = '"' + item + '"';
      }
      if (type === 'build') {
        obj[x] = item;
      }
    }
  }
  return obj;
}

module.exports = envConfig;
