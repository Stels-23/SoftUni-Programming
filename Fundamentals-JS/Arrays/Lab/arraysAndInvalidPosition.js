function arrays() {
    let nums = [10, 20, 30];
    // nums[3] = 40;
    nums[4] = 50;
    console.log(nums.join(" ")); // масива с празно място, тъй като на позиция 3 няма елемент
    console.log(nums.length); //5 е бр. елементи в масива
    console.log(nums[3]); //undefined, защото не е добавена стойност на елемент 3 и седи празно място
}
arrays();