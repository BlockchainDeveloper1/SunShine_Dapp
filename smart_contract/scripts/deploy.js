async function main() {


  const trans = await ethers.deployContract("Transactions");

  console.log("Contract address:", await trans.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
