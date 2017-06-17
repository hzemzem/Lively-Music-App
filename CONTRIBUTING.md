# Contributing to Lively Music App
Thank you for your interest in contributing to the Lively Music App. This software was designed by the creators as a project for the Ga Tech Coding Boot Camp. As such, outside contributions will not be considered so that the work is reflective of only the original creators. The rest of this document will serve as a guide for the original team for how to contribute to and maintain the project.

# Table of Contents
- [Docs](#docs)
- [Writing and Committing Code](#writing-and-committing-code)
- [Reporting Bugs and Issues](#reporting-bugs-and-issues)
- [JavaScript Modules](#javascript-modules)

## Docs
- [Original mock-ups](https://drive.google.com/file/d/0BxZloyWe4062MFVGeVdydmRPclU/view?usp=sharing)
- [Search data flow and overview of module functionality](https://drive.google.com/file/d/0BxZloyWe4062WHQ0ZDhXRGo3NFk/view?usp=sharing)
- [Example search result data for the Ticketmaster API](https://github.com/hzemzem/Lively-Music-App/tree/develop/data)
- [Student guide for project (GitLab)](http://gt.bootcampcontent.com/GT-Coding-Boot-Camp/04-2017-ATL-Class-Repository/blob/master/Class-Content/08-api-project-week-one/StudentGuide.md)

## Writing and Committing Code
An organized workflow for commiting in-progress code while preserving complete, functional code is essential to successful software development. To support this, the team has chosen to adopt the methodology described [in this article](https://code.tutsplus.com/tutorials/focusing-on-a-team-workflow-with-git--cms-22514). This is a standard git-workflow where the `master` branch is preserved for only fully-tested, deployable code, and the development branch serves as a staging area. Furthermore, feature and fix branches will be created as necessary to allow incremental development of new features or fixes to issues. Below is a summarized explanation of the process, although this is not a replacement for reading and understanding the above reference tutorial.

### Master and Develop Branches
The `master` branch is considered the *production ready* branch. As such, only fully reviewed and tested code will be merged with `master`. To enable this, no individual should make commits directly to the `master` branch.

The `develop` branch should be the main branch of ongoing development. Feature branches are created from and merged back into `develop`, and `develop` represents the bleeding edge of our codebase. Again, no individual should make direct commits to the `develop` branch since it is permanent and highly-trafficked.

### Feature Branches
When working on a new feature or portion of the project, team members should create a new branch from `develop` and complete their work on this independent branch. This can be accomplished with the following commands, executed from the command line:

```
git checkout develop
git checkout -b add-new-feature
```

The second command will create, and switch to, a new branch with the name 'add-new-feature'. No specific naming convention is mandated for branches, but best practice says the name should describe the work being completed.

Work can now be completed on this independent branch. Remember to commit often and provide meaningful commit messages. Also, try to limit the amount of work done on a branch to only the amount necessary for the feature or fix. This will improve code reviews since there will be less changes to review and all changes will be focused on a specific area and, hopefully, limited to one file.

When ready to merge code back into the `develop` branch, **do not merge directly**. Instead, the following steps should be followed:

1. Merge or rebase all of the current work on the `develop` branch into your feature branch (if you're not sure whether you should merge or rebase, ask for help)
2. If you have not already pushed the branch to the origin endpoint, push it now
3. Open a pull-request to merge the code into develop and add any appropriate comments, labels, references, etc.

The first two commands can be executed as such:

```
git checkout add-new-feature
git rebase develop
git push -u origin add-new-feature
```

To open a pull-request, go to the repository site on github.com, cick the 'Pull requests' tab, and click the 'New pull request' button. Select the branches to compare and merge and then click 'Create pull request'. If you need help, feel free to ask the group.

### Reviewing pull-requests
Once a new pull-request is opened, the team can review and comment on proposed changes. Team members are encouraged to review the code in a timely manner, ask any questions they may have, and provide a thumbs up or other approval if they believe it is ready to merge.

## Reporting Bugs and Issues
The team will use the Issues tab of the repository on github.com to report any found bugs or issues. When a bug is reported, a fix should be written using the above described workflow. References to the issue can be added when creating a pull-request that closes a bug.

## JavaScript Modules
In general, the module design pattern is an excellent choice for structuring code. This is for several reasons:

1. The module design hides variables and functions to a single namespace. This means that team members do not have to worry about using a variable name that has already been declared by another developer.
2. The module design allows a developer to hide implementation details and only share a public API for using the module. This makes interface design easy and predictable for others that use the module, while the developer is free to change and update the internal mechanisms of the module.
3. Modules encourage adherence to the principle Don't Repeat Yourself. Functionality can be defined a single time and then reused throughout the rest of the program.

Two excellent resources for understanding modules and how to define them are:
- [Eloquent JavaScript book](http://eloquentjavascript.net/10_modules.html).
- [Essential JS Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)

Team members are encouraged to write their JS files using a module pattern where possible. This is not critical, but can with structure and organization. If you're not comfortable with this idea, just write your JS how you best understand it, and we can always work together later on to refactor and organize it where it makes sense.

The general structure for a module is as follows:

```javascript
var MyModule = (function () {
  var privateVariable1;
  var privateVariable2;

  function privateFunction () {
    // This function cannot be called from outside of the module
    return privateVariable1 + privateVariable2;
  }

  function publicFunction (anotherVariable) {
    // This function is part of the modules interface, so it's available to be called from other files
    return privateFunction() + anotherVariable;
  }

  // The module returns an object that has references to what functions or variables should be publicly available
  return {
    publicFunction: publicFunction
  }
})(); // this makes the engine execute the function immediately, thus storing the returned object within the variable MyModule

// Can now call this module from anywhere else as follows:
MyModule.publicFunction(5);
```
