function skillsMember() {
    var skills = ['Java', 'Python', 'JavaScript', 'PHP'];
    var member = {
        name: 'John',
        age: 18,
        skills: skills,
        printSkills: function() {
            console.log(this.skills);
        }
    };
    console.log(member.name);
    console.log(member.age);
    member.printSkills();
}