# There is no silver bullet in software engineering.

I think once I wrapped my head around that concept, it has opened so many new doors to me. Let's discuss...

## Everything has a cost.

Let's abstract this concept into our daily life. From small decisions we make on a daily basis to major life-altering ones, we are constantly faced with the need to balance competing priorities.

Imagine you're craving some MacDonalds. You have two options: ordering from a food delivery service or taking a walk to a nearby outlet. Choosing the food delivery service offers convenience and saves time, but at the expense of spending a little extra money. On the other hand, walking to the restaurant requires some effort and time, but it saves you money and provides an opportunity to refocus your mind.

Consider yourself in the shoes of Jeff Bezos, one of the wealthiest men on the planet. For him, time is a valuable resource. In terms of monetary value, the time spent walking to buy food might pale in comparison to the potential earnings he could generate in that same period. For Jeff Bezos, ordering food delivery would likely be the most efficient choice.

However, for someone who is struggling with money or overwhelmed by work, taking that walk to a nearby restaurant could provide much-needed financial respite and peace of mind.

Even in life, everything has a cost - you win some, you lose some. There is no right answer or wrong answer. Everything depends on the situation.

### What do you gain, what do you lose?

When it comes to implementing solutions in software, tradeoffs play a significant role in determining the approach. Consider a scenario where we need to retrieve products from an e-commerce store. Initially, we could opt for a simple and readable solution using a for loop. This straightforward approach may have a time complexity of `O(n)`.

```javascript
// Simple for loop code to retrieve products
for (let i = 0; i < products.length; i++) {
    if (product.id === searchId) {
        return product
    }
}
```

However, there might be a tempting alternative—a more complex and efficient algorithm involving heavy indexing on the database and applying binary search. This is highly optimized and helps improve our performance greatly.

```javascript
function complexSearch(products) {
    // Complex query code with indexing and binary search
    // ...
}
```

At first glance, the second solution appears superior due to its faster performance. But is it really the right choice? Consider the context of the problem. What if the database contains only 10 products? In such cases, introducing all the complexity might be unnecessary. Let's say the first method takes `0.1ms` to retrieve each row of data, while the second method is 30% faster, taking `0.07ms` per row.

Additionally, we need to consider other factors, such as the amount of incoming traffic to our store. Should we account for scalability and handle larger datasets in the future? These variables further complicate the decision-making process. Software engineering is rarely straightforward, it requires analysis and consideration of numerous factors.

## You Ain't Gonna Need It.

`YAGNI`, an acronym for **"You Ain't Gonna Need It"**, is a fundamental principle in software development. It encourages us to resist the temptation of adding functionality or features that are not currently required. The philosophy behind YAGNI is rooted in simplicity, efficiency, and avoiding unnecessary complexity. By adhering to this principle, we can avoid wasting time and effort on developing features that may never be utilized or add unnecessary overhead to the codebase. YAGNI promotes a pragmatic approach, focusing on delivering the essential functionality that meets the immediate needs of users and stakeholders. By embracing YAGNI, software projects can maintain lean, streamlined codebases that are easier to maintain, test, and extend.

# The Three Pillars of Successful Software Engineering  (in my opinion)

![three_pillars](/blogs/tradeoffs-swe/threepillars.png)

Recently, I have been exploring some concepts and journaling out my thoughts on successful software development. I have came to the following conclusion... *(Sorry for the amateurish image haha :P)*

Software engineering encompasses three pillars that are essential to its philosophy: **Art, Science, and Communication.** The Art encompases our expression, from applying principles like `SOLID` and `YAGNI` to crafting code in a testable manner and employing design patterns like Domain Driven Design. It's the creative side of software engineering, where we design beautiful system architectures and coding solutions.

As for Science, it revolves around the tools we use to bring the Art to life. It includes cloud technologies such as AWS or GCP, data structures and algorithms for efficient processing, understanding computer hardware like RAM and CPU, and the various programming languages and IDEs. This scientific knowledge empowers us to build robust and performant software systems.

Communication is the glue that holds everything together. It's about understanding requirements, engaging stakeholders effectively, and scoping projects appropriately. Good communication ensures that our team is aligned, well-guided, and capable of building solutions that meet the needs of our clients. It accounts for factors like team expertise and project requirements.

Finding the right balance among these pillars is crucial. If we focus too much on Art and Science without adequate Communication, we risk delivering a product that doesn't align with client needs. On the other hand, overemphasizing Science and Communication, without adequate Art may neglect maintainability, leading to technical debt and long-term issues. Similarly, an excessive focus on Art and Communication without adequate Science could result in a product that lacks operational capabilities.

By understanding and exploring the tradeoffs inherent in the three pillars of software engineering, we gain valuable insights into how to strike the right balance. It's a delicate touch, that comes with experience, something that I strive to achieve someday. Might write a blog on the three pillars and my thoughts in the future!

# Closing Thoughts.

Well, as for me, I am still exploring world of tradeoffs in software engineering. This concept has been an important one for me, serving as one of my guiding principles. It has taught me to weigh different factors, make informed decisions, and find the delicate balance that aligns with project goals and constraints.

I hope that you enjoyed this blog, and got something useful out of it!

## What are some tradeoffs you made today?
