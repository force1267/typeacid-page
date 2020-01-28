<script>
  import { onMount } from "svelte";
  export let acid = "acid"
  export let record = 0
  onMount(async e => record = await (await fetch("/api/record")).json())
  function type(e) {
    if (acid.length > 10) return;
    let isDigit = (e.keyCode >= 48 && e.keyCode <= 57)
    let isLower = (e.keyCode >= 97 && e.keyCode <= 122)
    let isUpper = (e.keyCode >= 65 && e.keyCode <= 90)
    let isGood = [33, 35, 64, 36, 38].includes(e.keyCode) // ! # @ $ &
    if(isDigit || isLower || isUpper || isGood) {
      acid = acid ? acid + e.key : e.key
    }
  }
  function operate(e) {
    if(e.keyCode === 8) {
      acid = acid.length > 1 ? acid.slice(0, acid.length - 1) : null
    }
  }
</script>

<main>
  <h1>type{acid || ""}</h1>
  <h2>
    is coming !
  </h2>
  <p>{record} <img alt="views" src="https://img.icons8.com/material-outlined/15/000000/visible.png"></p>
</main>

<svelte:window on:keypress={type} on:keydown={operate}/>