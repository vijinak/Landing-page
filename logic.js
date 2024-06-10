class Landing{
    // property
    database ={
        Milan:{username:'Milan',password:'milan123'},
        Vivek:{username:'Vivek',password:'vivek123'},
        Dhyan:{username:'Dhyan',password:'dhyan123'}
    }
    // to store data to local storage
    storeData(){
        if(this.database){
            localStorage.setItem('Database',JSON.stringify(this.database))
        }
    }
    // to get data from local storage
    getData(){
        this.database = JSON.parse(localStorage.getItem('Database'))
        // console.log(this.database);
    }
    // to register
    register(){
        this.getData()
        let user = regUser.value
        let pswd = regPswd.value
        // console.log(user,pswd);
        if(user == '' || pswd == ''){
            alert('Please complete the form')
        }
        else{
            if(user in this.database){
                alert('Account already exit')
            }
            else{
                this.database[user] = {username:user,password:pswd}
                alert('User added successfully')
                this.storeData()
                // navigate to login page
                window.location = 'login.html'
            }
        }
    }
    // method to login an user
    login(){
        let user1 = loginUser.value
        let pswd1 = loginPswd.value
        this.getData()
        if(user1=='' || pswd1==''){
            alert('Please fill the form completely')
        }
        else{
            if(user1 in this.database){
                if(this.database[user1].password==pswd1){
                    alert('Login successfull')
                    localStorage.setItem('user',user1)
                    window.location = 'home.html'
                }
                else{
                    alert('Invalid username or password')
                }
            }
            else{
                alert('Account doesnot exit')
            }
        }
    }
}
// object
const obj = new Landing()
// obj.storeData()
obj.getData()
