import Interest from '../models/Interest';
import User from '../models/User';
import Survey from '../models/Survey';

class InterestContoller {
  async index(req, res) {
    const interest = await Interest.findAll({
      where: {
        user_id: req.userId,
      },
    });

    return res.json(interest);
  }

  async store(req, res) {
    const user = await User.findByPk(req.userId);

    const survey = await Survey.findByPk(req.params.surveyId);

    const interest = await Interest.create({
      user_id: user.id,
      survey_id: survey.id,
    });

    return res.json(interest);
  }
}

export default new InterestContoller();
