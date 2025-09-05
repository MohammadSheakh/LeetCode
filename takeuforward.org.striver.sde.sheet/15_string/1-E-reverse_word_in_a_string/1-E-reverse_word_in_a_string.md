https://takeuforward.org/data-structure/reverse-words-in-a-string/

#### (Brute Force)

Use a stack to push all the words in a stack

Now, all the words of the string are present in the stack, but in reverse order

Pop elements of the stack one by one and add them to our answer variable. Remember to add a space between the words as well.

Space Complexity: O(N)

#### (Optimized Solution)

Intuition: Notice, that we are using a stack in order to perform our task. Can we somehow not use it and reverse the words as we move through the string? Could we store a word in reverse order when we are adding it to our answer variable?
> Approach:

We start traversing the string from the end until we hit a space. It indicates that we have gone past a word and now we need to store it.

We check if our answer variable is empty or not

If it’s empty, it indicates that this is the last word we need to print, and hence, there shouldn’t be any space after this word.

If it’s empty we add it to our result with a space after it. Here’s a quick demonstration of the same

Space Complexity: O(1), Constant Space






