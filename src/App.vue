<script setup lang="ts">
import { init } from "@web3-onboard/vue";
import injectedModule from "@web3-onboard/injected-wallets";
import ConnectToWallet from "./components/GetUserLocation.vue";
const injected = injectedModule();
const infuraKey = "<INFURA_KEY>";
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`;

const web3Onboard = init({
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl,
    },
  ],
});
</script>

<template>
  <h1>whateva</h1>
  <ConnectToWallet></ConnectToWallet>
</template>

<style scoped></style>
