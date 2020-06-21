export default (start, end, fixed=0) => {
  let differ = end - start
  let random = Math.random()
  return (start + differ * random).toFixed(fixed)
}

