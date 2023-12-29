import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PeopleAccount2 } from './class/PeolpleAccount2'
import { CAccount } from './class/CAccount3'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(200)
console.log(`Seu saldo é ${peopleAccount.getBalance()} Reais`)
peopleAccount.withdraw(170)
console.log(`Seu saldo é ${peopleAccount.getBalance()} Reais`)
peopleAccount.deposit(500)
console.log(`Seu saldo é ${peopleAccount.getBalance()} Reais`)



const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
//companyAccount.deposit()
console.log(companyAccount)


const peopleAccount2: PeopleAccount2 = new PeopleAccount2(2, 'Evânio',30)
console.log(peopleAccount2)
peopleAccount2.depositbest(300)
console.log(`Seu saldo é ${peopleAccount2.getBalance()} Reais`)
peopleAccount2.withdraw(100)
console.log(`Seu saldo é ${peopleAccount2.getBalance()} Reais`)


const cacccount : CAccount = new CAccount ('butikin', 3, 34)
console.log(cacccount)
cacccount.getLoan(10000)
console.log(`Seu saldo é ${cacccount.getBalance()} Reais`)
