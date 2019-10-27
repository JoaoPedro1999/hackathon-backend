import Survey from '../models/Survey';

class SurveyController {
  async index(req, res) {
    const survey = await Survey.findAll();

    return res.json(survey);
  }

  async store(req, res) {
    const { human, exacts, biological } = req.body;

    const survey = await Survey.create({ human, exacts, biological });

    return res.json({
      survey,
    });
  }
}

export default new SurveyController();
