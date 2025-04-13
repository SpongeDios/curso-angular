const skills: string[] = ['Bash', 'Counter', 'Healing']

interface Character{
    name: string
    hp: Number
    skills: string[]
    hometown?: string
}

const eto: Character = {
    name: 'Eto',
    hp: 777,
    skills: ['Bash', 'Counter'],
}

eto.hometown = 'Puente Alto'

console.table(eto)

export {}