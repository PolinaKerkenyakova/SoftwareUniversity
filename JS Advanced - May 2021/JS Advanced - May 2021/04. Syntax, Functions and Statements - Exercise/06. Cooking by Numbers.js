function cookingByNumbers(num, oprOne, oprTwo, oprThree, oprFour, oprFive) {

    num = Number(num);

   let operationsArray = [oprOne, oprTwo, oprThree, oprFour, oprFive];

   for (let operation of operationsArray) {
       switch (operation) {
           case 'chop':
               num = num / 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num *= .8;
                break;
       }

       console.log(num);
   }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');