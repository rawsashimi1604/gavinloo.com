# How I Think About Writing Clean and Maintainable Code.

Hey everyone, I wanted to share how I think about writing clean and readable code. These are some of my experiences that I think are really valuable.

## Think About Code Readability: Good Code is Simple to Read

One of the most important things when writing code is making sure it's easy to read. Software engineers spend more time reading code than writing it, so code should be written in a way that's easy for others to understand. One of the best ways to do this is by writing clean and readable code.

## Readability = Maintainability

By writing more readable code, it naturally becomes more maintainable. **Maintainable code = happy coworkers = take less time to fix bugs, write new features = happy business**

## Guidelines

Let's look at an example of "badly" written code and iterate on it to improve its readability.

Here's an example of a simple policy registration for a user:

```java
public class prsvc {

    private Policyrepository pR;

    public prsvc(Policyrepository pR) {
        this.pR = pR;
    }

    public void R(User u, Policy P) throws PolicyException {
        if (u.policies.size() <= 3) {
            for (Policy Px : u.policies) {
                if (Px.id.equals(P.id)) {
                    throw new PolicyException("dup");
                }
            }

            pR.addpolicy(P,u);
        } else {
            throw new PolicyException(">3 policies");
        }
    }
}
```

### Naming

Ok, that looks awful and hard to digest. Let's start with variable naming and coding standards (in the context of Java).

Naming standards help us have a common way of conversing (in code) among software engineers. Imagine if everyone had their own way of naming things, it would increase the cognitive load. Remember, we want to decrease cognitive load (make it more readable).

In Java, there are some naming styles/standards for naming classes, methods, variables.

- Code should be verbose to describe the object/variable/method well,, ie instead writing `a = 3`, we write `apples = 3`
- Classes should be written in pascal case, ie `SomeClassNameHere`
- Variables and methods should be written in camel case, ie `someVariableName` or `someMethodHere`
- Constants should be written in all capitalized characters, and use an underscore for spaces between words, `SOME_CONSTANT_VALUE`

Let's clean up the code to introduce proper naming and coding standards!

```java
public class PolicyRegistrationService {

    private PolicyRepository policyRepository;

    public PolicyRegistrationService(PolicyRepository policyRepository) {
        this.policyRepository = policyRepository;
    }

    public void register(User user, Policy policy) throws PolicyException {
        if (user.policies.size() <= 3) {
            for (Policy userPolicy : user.policies) {
                if (userPolicy.id.equals(policy.id)) {
                    throw new PolicyException("duplicate policy detected!")
                }
            }

            policyRepository.addPolicy(policy, user);
        } else {
            throw new PolicyException("reached policy limit!")
        }
    }
}
```

Looking much better!

## Avoid Nesting

Another thing we tend to avoid is nesting code. Deeply nested code is bad and makes it hard to read. Imagine three nested blocks of if-else like this:

```java
if (someCondition1) {
    if (someCondition2) {
        if (someCondition3) {
            // ....
        } else {
            // ...
        }
    } else {
        // ...
    }
} else {
    // ...
}
```

This gets out of hand quickly and can be painful to work with.

To fix this, we use negative condition coding practices. Let me give you an example.

```java
if (!someCondition1) {
    // ...
}

if (!someCondition2) {
    // ...
}

if (!someCondition3) {
    // ...
}

// perform success logic here...
```

As you can see, this is much cleaner. We handle the negative conditions first. Then, after passing all the negative "guards", we can be sure the code at the end can be successfully executed.

Let's fix the `register` method in our code.

```java
public class PolicyRegistrationService {

    private PolicyRepository policyRepository;

    public PolicyRegistrationService(PolicyRepository policyRepository) {
        this.policyRepository = policyRepository;
    }

    public void register(User user, Policy policy) throws PolicyException {
        if (user.policies >= 3) {
            throw new PolicyException("reached policy limit!");
        }

        for (Policy userPolicy : user.policies) {
            if (userPolicy.id.equals(policy.id)) {
                throw new PolicyException("duplicate policy detected!");
            }
        }

        policyRepository.addPolicy(policy, user);
    }
}
```

As you can see, we moved the check for the user having more than 3 policies to the start, as well as the duplicate policy check. We managed to achieve a maximum of one level of nesting, making the code much more readable.

## Avoid Magic Numbers

Another common mistake in coding is hard-coding numbers. If a number has a specific meaning, it's common practice to assign it to a variable, or in most cases, a constant.

BAD.

```java

public setPassword(String password) throws Exception {
    if (password.length > 12) {
        throw new Exception("invalid pasword size");
    }

    // ...
}
```

GOOD.

```java
public static void MAX_PASSWORD_SIZE = 12;

public setPassword(String password) throws Exception {
    if (password.length > MAX_PASSWORD_SIZE) {
        throw new Exception("invalid pasword size")
    }

    // ...
}

```

This makes the code more maintainable. If you need to change the maximum password size, you can just change the `MAX_PASSWORD_SIZE` variable. Notice how the naming standard is adhered to: constants should be named in all capital letters and have an underscore between words.

Let's improve the readability of our policy registration code by adding a new constant to store the maximum number of policies a user can have: `MAXIMUM_USER_POLICIES`.

```java
public class PolicyRegistrationService {

    private PolicyRepository policyRepository;

    private static void MAXIMUM_USER_POLICIES = 3;

    public PolicyRegistrationService(PolicyRepository policyRepository) {
        this.policyRepository = policyRepository;
    }

    public void register(User user, Policy policy) throws PolicyException {
        if (user.policies >= MAXIMUM_USER_POLICIES) {
            throw new PolicyException("reached policy limit!");
        }

        for (Policy userPolicy : user.policies) {
            if (userPolicy.id.equals(policy.id)) {
                throw new PolicyException("duplicate policy detected!");
            }
        }

        policyRepository.addPolicy(policy, user);
    }
}
```

## Abstract Booleans into Variables or Methods

Another tip is to abstract booleans into variables or methods. This gives meaning to conditions and makes them more readable.

Here's a quick fix where we introduce the boolean variable `userReachedPolicyLimit` and method `checkUserHasDuplicatePolicy`.

```java
public class PolicyRegistrationService {

    private PolicyRepository policyRepository;

    private static void MAXIMUM_USER_POLICIES = 3;

    public PolicyRegistrationService(PolicyRepository policyRepository) {
        this.policyRepository = policyRepository;
    }

    public void register(User user, Policy policy) throws PolicyException {

        boolean userReachedPolicyLimit = user.policies >= MAXIMUM_USER_POLICIES;
        if (userReachedPolicyLimit) {
            throw new PolicyException("reached policy limit!");
        }

        boolean userHasDuplicatePolicy = checkUserHasDuplicatePolicy(user, policy);
        if (userHasDuplicatePolicy) {
            throw new PolicyException("duplicate policy detected!");
        }

        policyRepository.addPolicy(policy, user);
    }

    private boolean checkUserHasDuplicatePolicy(User user, Policy policy) {
        for (Policy userPolicy : user.policies) {
            if (userPolicy.id.equals(policy.id)) {
                return true;
            }
        }
        return false;
    }
}
```

## Summary

Looking at the results, we went from this:

```java
public class prsvc {

    private Policyrepository pR;

    public prsvc(Policyrepository pR) {
        this.pR = pR;
    }

    public void R(User u, Policy P) throws PolicyException {
        if (u.policies.size() <= 3) {
            for (Policy Px : u.policies) {
                if (Px.id.equals(P.id)) {
                    throw new PolicyException("dup");
                }
            }

            pR.addpolicy(P,u);
        } else {
            throw new PolicyException(">3 policies");
        }
    }
}
```

to this:

```java
public class PolicyRegistrationService {

    private PolicyRepository policyRepository;

    private static void MAXIMUM_USER_POLICIES = 3;

    public PolicyRegistrationService(PolicyRepository policyRepository) {
        this.policyRepository = policyRepository;
    }

    public void register(User user, Policy policy) throws PolicyException {

        boolean userReachedPolicyLimit = user.policies >= MAXIMUM_USER_POLICIES;
        if (userReachedPolicyLimit) {
            throw new PolicyException("reached policy limit!");
        }

        boolean userHasDuplicatePolicy = checkUserHasDuplicatePolicy(user, policy);
        if (userHasDuplicatePolicy) {
            throw new PolicyException("duplicate policy detected!");
        }

        policyRepository.addPolicy(policy, user);
    }

    private boolean checkUserHasDuplicatePolicy(User user, Policy policy) {
        for (Policy userPolicy : user.policies) {
            if (userPolicy.id.equals(policy.id)) {
                return true;
            }
        }
        return false;
    }
}
```

Much better right? People who want to understand/maintain this code would have a much easier time in the future :)

## Comments

I want to talk about comments as well. Comments should explain the intent, and the code should be self-documenting. Heres the previous code with bad comments:

```java
public class PolicyRegistrationService {

    private PolicyRepository policyRepository;

    private static void MAXIMUM_USER_POLICIES = 3;

    public PolicyRegistrationService(PolicyRepository policyRepository) {
        this.policyRepository = policyRepository;
    }

    public void register(User user, Policy policy) throws PolicyException {

        // Check user has reached policy limit
        boolean userReachedPolicyLimit = user.policies >= MAXIMUM_USER_POLICIES;
        if (userReachedPolicyLimit) {
            throw new PolicyException("reached policy limit!");
        }

        // Check user has duplicate policy
        boolean userHasDuplicatePolicy = checkUserHasDuplicatePolicy(user, policy);
        if (userHasDuplicatePolicy) {
            throw new PolicyException("duplicate policy detected!");
        }

        // Add policy to the repository
        policyRepository.addPolicy(policy, user);
    }

    private boolean checkUserHasDuplicatePolicy(User user, Policy policy) {
        for (Policy userPolicy : user.policies) {
            if (userPolicy.id.equals(policy.id)) {
                return true;
            }
        }
        return false;
    }
}
```

Notice how in the case of these three comments, the code already documents what is happening:

- `// Check user has reached policy limit`
- `// Check user has duplicate policy`
- `// Add policy to the repository`

Instead, we can write comments to explain intent if needed:

```java
public class PolicyRegistrationService {

    private PolicyRepository policyRepository;

    private static void MAXIMUM_USER_POLICIES = 3;

    public PolicyRegistrationService(PolicyRepository policyRepository) {
        this.policyRepository = policyRepository;
    }

    public void register(User user, Policy policy) throws PolicyException {

        // Each user has a maxmimum number of policies as specified in "https://document.com/some-user-policy-specification", therefore we perform the check here.
        boolean userReachedPolicyLimit = user.policies >= MAXIMUM_USER_POLICIES;
        if (userReachedPolicyLimit) {
            throw new PolicyException("reached policy limit!");
        }

        // Users cannot have 2 duplciate policies as each policy is unique
        boolean userHasDuplicatePolicy = checkUserHasDuplicatePolicy(user, policy);
        if (userHasDuplicatePolicy) {
            throw new PolicyException("duplicate policy detected!");
        }

        policyRepository.addPolicy(policy, user);
    }

    private boolean checkUserHasDuplicatePolicy(User user, Policy policy) {
        for (Policy userPolicy : user.policies) {
            if (userPolicy.id.equals(policy.id)) {
                return true;
            }
        }
        return false;
    }
}
```

These are better comments as they explain the intent behind the code.

## There is no perfect code

Finally, I want to end with this. It's good to adhere to coding standards and try to make the code as clean as possible. But don't lose sight of the objective, which is to ultimately deliver business value using code. There is no perfect code, only good enough code! Make it the best you can and move on. Hope this helped :)
