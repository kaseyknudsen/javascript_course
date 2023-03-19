//break will break out of the entire loop
for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log("breaking");
    break;
  }
  console.log(`i: ${i}`)
}

//continue will skip the expression in the conditional expression and continue on
for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        console.log('skipping 13')
        continue
    }
    console.log(i)
}

