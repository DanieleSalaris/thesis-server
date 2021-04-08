
const mockSurvey = {
  _id: 1,
  questions: [
    {
      type: 'choice',
      question: {
        _id: 1,
        label: "Indichi qual'è  il suo ambiente  di lavoro",
        singleChoice:  false, // @todo change it with numberOfChoice?
        hasOtherOption: true,
        options: [
          {label: 'UFFICIO RUMORE AMBIENTALE - LATO NORD PRIMO PIANO'},
          {label: 'UFFICIO NIR - LATO SUD PRIMO PIANO'},
          {label: 'LAB AS (ACQUE E SPETTROMETRIA) - LATO SUD PRIMO PIANO'}
        ]
      }
    },
    {
      type: 'choice',
      question: {
        _id: 1,
        label: "Quanto tempo passa abitualmente all'interno del'suo ambiente di lavoro?",
        singleChoice: true,
        hasOtherOption: false,
        options: [
          {label: 'Meno di 2 ore'},
          {label: 'Da 2 a 4 ore'},
          {label: 'Da 4 a 6 ore'},
          {label: 'Da 6 a 8 ore'},
          {label: '8 ore o più'}
        ]
      }
    },
    {
      type: 'array',
      question: {
        id: 3,
        label: 'Quanto è soddisfatto dalle condizioni termiche (temperatura, umidità) nel suo ambiente di lavoro?',
        singleChoice: true,
        subQuestions: [
          {label: 'Inverno'},
          {label: 'Estate'},
          {label: 'Stagioni intermedie (autunno e primavera)'}
        ],
        options: [
          {label: 'Molto insoddisfatto'},
          {label: 'Insoddisfatto'},
          {label: 'Leggermente insoddisfatto'},
          {label: 'Neutro'},
          {label: 'Leggermente soddisfatto'},
          {label: 'Soddisfatto'}
        ]
      }
    }
  ]
}

const surveyMiddleware = {
  getSurvey: (req, res) => {
    const {id} = req.params

    res.json(mockSurvey)
  }
}

module.exports = surveyMiddleware
