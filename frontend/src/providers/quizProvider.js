import { createContext } from "react";

export const QuizContextProvider = (props) => {
  const questions = [
    {
      _id: "2d98sdfkdd3",
      level: 'A',
      weight: 20,
      type: "multichoice",
      src: "Référentiel de Neurologie 2018, p.289",
      tags: ["#VIèmepaire"],
      statistics:{
        lastAttempt:"6 days ago",
        lastScore: 10,
        successRate: 32
      },
      content:
        "Parmi les propositions suivantes, quelles sont les étiologies de troubles de la vision de près ?",
      choices: [
        "paralysie de la VI ème paire crânienne",
        "diphtérie",
        "prise d’anticholinergiques",
        "diphtérie",
        "prise d’anticholinergiques",
      ],
      result: {
        score: 4,
        choices: [
          {
            correctAnswer: true,
            yourAnswer: true,
            desc: "--la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: true,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: false,
            desc: "la paralysie du sixièm--e nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: false,
            desc: "la paralysie du sixième -nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: true,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
        ],
        comment: {
          content:
            "Les questions d’anatomie devien-nent assez fréquentes sur les dernières éditions des ECNi. Veillez à bien maîtriser les différentes causes traumatiques de paralysie des nerfs crâniens.",
          ref: [
            {
              title: "Diphtérie",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, con--sectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Les nerfs crâniens",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, co--nsectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Méningites virales",
              definition:
                "Toxinfection responsables d’attein---tes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/ph---oto-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Syndrome anticholinergique",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consecte--tur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
          ],
        },
      },
    },
    {
      _id: "2d98sxcxsdfaddd3",
      level: 'B',
      weight: 20,
      type: "multichoice",
      src: "Référentiel de Neurologie 2018, p.289",
      tags: ["#VIèmepaire"],
      statistics:{
        lastAttempt:"6 days ago",
        lastScore: 10,
        successRate: 32
      },
      content:
        "Parmi les propositions suivantes, quelles sont les étiologies de troubles de la vision de près ?",
      choices: [
        "paralysie de la VI ème paire crânienne",
        "diphtérie",
        "prise d’anticholinergiques",
        "diphtérie",
        "prise d’anticholinergiques",
      ],
      result: {
        score: 10,
        choices: [
          {
            correctAnswer: true,
            yourAnswer: true,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: true,
            yourAnswer: true,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: false,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: false,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: true,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
        ],
        comment: {
          content:
            "Les questions d’anatomie deviennent assez fréquentes sur les dernières éditions des ECNi. Veillez à bien maîtriser les différentes causes traumatiques de paralysie des nerfs crâniens.",
          ref: [
            {
              title: "Diphtérie",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Les nerfs crâniens",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Méningites virales",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Syndrome anticholinergique",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
          ],
        },
      },
    },
    {
      _id: "2d98ewr",
      level: 'C',
      weight: 20,
      type: "multichoice",
      src: "Référentiel de Neurologie 2018, p.289",
      tags: ["#VIèmepaire"],
      statistics:{
        lastAttempt:"6 days ago",
        lastScore: 10,
        successRate: 32
      },
      content:
        "Parmi les propositions suivantes, quelles sont les étiologies de troubles de la vision de près ?",
      choices: [
        "paralysie de la VI ème paire crânienne",
        "diphtérie",
        "prise d’anticholinergiques",
        "diphtérie",
        "prise d’anticholinergiques",
      ],
      result: {
        score: 20,
        choices: [
          {
            correctAnswer: true,
            yourAnswer: true,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: true,
            yourAnswer: true,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: false,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: true,
            yourAnswer: true,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: false,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
        ],
        comment: {
          content:
            "Les questions d’anatomie deviennent assez fréquentes sur les dernières éditions des ECNi. Veillez à bien maîtriser les différentes causes traumatiques de paralysie des nerfs crâniens.",
          ref: [
            {
              title: "Diphtérie",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Les nerfs crâniens",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Méningites virales",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Syndrome anticholinergique",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
          ],
        },
      },
    },
    {
      _id: "2d98sdfkdxczcd3",
      level: 'A',
      weight: 20,
      type: "multichoice",
      src: "Référentiel de Neurologie 2018, p.289",
      tags: ["#VIèmepaire"],
      statistics:{
        lastAttempt:"6 days ago",
        lastScore: 10,
        successRate: 32
      },
      content:
        "Parmi les propositions suivantes, quelles sont les étiologies de troubles de la vision de près ?",
      choices: [
        "paralysie de la VI ème paire crânienne",
        "diphtérie",
        "prise d’anticholinergiques",
        "diphtérie",
        "prise d’anticholinergiques",
      ],
      result: {
        score: 20,
        choices: [
          {
            correctAnswer: true,
            yourAnswer: true,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: false,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: false,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: false,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: false,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
        ],
        comment: {
          content:
            "Les questions d’anatomie deviennent assez fréquentes sur les dernières éditions des ECNi. Veillez à bien maîtriser les différentes causes traumatiques de paralysie des nerfs crâniens.",
          ref: [
            {
              title: "Diphtérie",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Les nerfs crâniens",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Méningites virales",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Syndrome anticholinergique",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
          ],
        },
      },
    },
    {
      _id: "2d98szxczcdfkdd3",
      level: 'A',
      weight: 20,
      type: "multichoice",
      src: "Référentiel de Neurologie 2018, p.289",
      tags: ["#VIèmepaire"],
      statistics:{
        lastAttempt:"6 days ago",
        lastScore: 10,
        successRate: 32
      },
      content:
        "Parmi les propositions suivantes, quelles ---sont les étiologies de troubles de la vision de près ?",
      choices: [
        "paralysie de la VI ème paire crânienne",
        "diphtérie",
        "prise d’anticholinergiques",
        "diphtérie",
      ],
      result: {
        score: 0,
        choices: [
          {
            correctAnswer: false,
            yourAnswer: true,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique o--u associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: false,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: true,
            desc: "la paralysie du sixième nerf crânien est g--énéralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
          {
            correctAnswer: false,
            yourAnswer: true,
            desc: "la paralysie du sixième nerf crânien est généralement idiopathique ou associée à une infection virale ou survient en cas d'une méningite. Elle peut être liée à une irritation directe du nerf due à une augmentation de la pression intracrânienne.",
          },
        ],
        comment: {
          content:
            "Les questions d’anatomie deviennent assez fréquentes sur les de---rnières éditions des ECNi. Veillez à bien maîtriser les différentes causes traumatiques de paralysie des nerfs crâniens.",
          ref: [
            {
              title: "Diphtérie",
              definition:
                "Toxinfection responsables d’atteintes cardiaques e--t neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Les nerfs crâniens",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et --neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Méningites virales",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
            {
              title: "Syndrome anticholinergique",
              definition:
                "Toxinfection responsables d’atteintes cardiaques et neurologiques. Dûe à Cornybacterium diphteriae.",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dictumst tempus magna elit cras posuere cursus pulvinar id. Facilisis at eu amet ornare enim arcu malesuada rutrum a.",
              note: "Déclaration obligatoire à l’ARS si toxines \n Vaccination immédiate dans les suites",
              image: {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                title: "Aspect d’une angine à diphtérie",
              },
            },
          ],
        },
      },
    },
    {
      _id: "2d98szxczxczcdfkdd3",
      level: 'B',
      weight: 20,
      type: "multichoice",
      src: "Référentiel de Neurologie 2018, p.289",
      tags: ["#VIèmepaire"],
      statistics:{
        lastAttempt:"6 days ago",
        lastScore: 10,
        successRate: 32
      },
      content:
        "Parmi les propositions suivantes, quelles sont les étiologies de troubles de la vision de près ?",
      choices: [
        "paralysie de la VI ème paire crânienne",
        "diphtérie",
        "prise d’anticholinergiques",
        "diphtérie",
        "prise d’anticholinergiques",
      ],
      result: null,
    },
    {
      _id: "2d98sD WEQdfkdd3",
      level: 'C',
      weight: 20,
      type: "multichoice",
      src: "Référentiel de Neurologie 2018, p.289",
      tags: ["#VIèmepaire"],
      statistics:{
        lastAttempt:"6 days ago",
        lastScore: 10,
        successRate: 32
      },
      content:
        "Parmi les propositions suivantes, quelles sont les étiologies de troubles de la vision de près ?",
      choices: [
        "paralysie de la VI ème paire crânienne",
        "diphtérie",
        "prise d’anticholinergiques",
        "diphtérie",
        "prise d’anticholinergiques",
      ],
      result: null,
    },
    {
      _id: "2d98sCVZdfkdd3",
      level: 'B',
      weight: 20,
      type: "multichoice",
      src: "Référentiel de Neurologie 2018, p.289",
      tags: ["#VIèmepaire"],
      statistics:{
        lastAttempt:"6 days ago",
        lastScore: 10,
        successRate: 32
      },
      content:
        "Parmi les propositions suivantes, quelles sont les étiologies de troubles de la vision de près ?",
      choices: [
        "paralysie de la VI ème paire crânienne",
        "diphtérie",
        "prise d’anticholinergiques",
        "diphtérie",
        "prise d’anticholinergiques",
      ],
      result: null,
    },
    {
      _id: "2d98sXCVZdfkdd3",
      level: 'B',
      weight: 20,
      type: "multichoice",
      src: "Référentiel de Neurologie 2018, p.289",
      tags: ["#VIèmepaire"],
      statistics:{
        lastAttempt:"6 days ago",
        lastScore: 10,
        successRate: 32
      },
      content:
        "Parmi les propositions suivantes, quelles sont les étiologies de troubles de la vision de près ?",
      choices: [
        "paralysie de la VI ème paire crânienne",
        "diphtérie",
        "prise d’anticholinergiques",
        "diphtérie",
        "prise d’anticholinergiques",
      ],
      result: null,
    },
  ];
  const value = {questions};

  return (
    <QuizContext.Provider value={value}>{props.children}</QuizContext.Provider>
  );
};

export const QuizContext = createContext({
    quiz: {}
});
