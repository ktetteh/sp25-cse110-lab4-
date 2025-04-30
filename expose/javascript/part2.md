1. Line 12 printed out 3. This is because that is the number of items in prices, which we iterated through in the for loop
2. Line 13 prints out 150. This is because that is the discounted price of the final indexed item cost in "prices", so it saves to that variable.
3. Line 14 prints out 150 as well, for much of the same reasoning as discountedPrice, it is the final price of the last indexed item cost in "prices", so it saves to that variable, and is accessed when printed.
4. This function returns the updated discounted prices [ 50, 100, 150 ]. This is because we pushed the discounted prices of each item we had into a list called discounted.
5. At line 12, we get an error, as we are trying to call index i out of scope from where it's from, as we need to remember that let actually follows conventional block order scoping, so we can't do what we were doing to var originally.
6. Line 13 gives us an error, and the reasoning is similar to why we got an error in the previous problem as well, as we are calling discountedPrice from out of its scope, as let follows conventional block order scoping, unlike var.
7. Line 14 prints out 150. Since we declared finalPrice outside of the for loop unlike the others, its able to print out just fine.
8. This function returns the updated discounted prices of the original prices we had in a list, [ 50, 100, 150 ].
9. We get an error at line 11, as we are trying to access i outside of the for loop's scope, which isn't possible when using a let variable for a for loop.
10. Line 12 prints out 3, which makes sense as it is set to the length of the prices list we input (which is in our case, 3), and we don't change this value at all in our program.
11. This function returns the updated discounted prices, such as in this case, [ 50, 100, 150 ]. Even though we changed the variable type, we don't reassign the variables, only assigning them once.
12. a) student.name
    b) student['Grad Year']
    c)
    d)
    e) student.courseLoad[0]
