function constructionCrew(workObj) {

    if (workObj.dizziness) {
        workObj.levelOfHydrated += workObj.weight * .1 * workObj.experience;
        workObj.dizziness = false;
    }

    return workObj;
}

constructionCrew(
    {
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }
);

constructionCrew(
    {
        weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true
    }
);

constructionCrew(
    {
        weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false
    }
);