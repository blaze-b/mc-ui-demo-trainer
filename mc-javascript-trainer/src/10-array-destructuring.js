let mountain_list = (mountain) => {

    for (let i = 0; i < mountain.length; i++) {
        console.log(`Mountains = ${mountain[i]}`);
    }

    let [first_mountain] = mountain;
    console.log(`First mountain is ${first_mountain}`);

    let [,second_mountain] = mountain;
    console.log(`Second mountain is ${second_mountain}`);

    let[,,third_mountain] = mountain;
    console.log(`Third mountain is ${third_mountain}`);

    let[,,,fourth_mountain] = mountain;
    setTimeout(() => {
        console.log(`Fourth mountain is ${fourth_mountain}`);
    }, 3000);
}

mountain_list(['Mt. Everest', 'K2', 'Kilimanjaro', 'Colorado']);