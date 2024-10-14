import { Iform } from "../types/Forms";

export const createProjectForm: Array<Iform> = [
    {
        label: 'Project Name',
        type: 'text',
        maxLength: 99,
        disabled: false,
        placeHolder: 'Enter project name',
        required: true,
        valueName: 'projectName',
        width: '100%'
    },
    {
        label: 'Project Description',
        type: 'textarea',
        disabled: false,
        placeHolder: 'Enter project description',
        required: false,
        valueName: 'projectDescription',
        width: 'full',
        height: '32'
    },
    {
        label: 'Project Privacy',
        type: 'select',
        maxLength: 8,
        disabled: false,
        placeHolder: 'Enter project privacy (e.g., public/private)',
        required: true,
        valueName: 'projectPrivacity',
        width: '100%',
        options:['Public','Private']
    },
    {
        label: 'Project Type',
        type: 'text',
        maxLength: 10,
        disabled: false,
        placeHolder: 'Enter project type',
        required: true,
        valueName: 'projectType',
        width: '100%'
    }
]

export const taskPostFormMapping: Array<Iform> = [
    {
        label: "Nombre de la tarea",
        type: "text",
        maxLength: 90,
        minLength: 3,
        placeHolder: "Ejemplo: Crear modelo relacional SQL",
        required: true,
        valueName: "taskName",
        disabled: false,
    },
    {
        label: "Descripción de la tarea",
        type: "textarea",
        maxLength: 500,
        minLength: 20,
        placeHolder: "Ejemplo: Esta tarea consiste en diseñar un modelo de base de datos que incluya las entidades y sus relaciones.",
        required: true,
        valueName: "taskDescription",
        disabled: false,
        height:"10rem"
    }
];
