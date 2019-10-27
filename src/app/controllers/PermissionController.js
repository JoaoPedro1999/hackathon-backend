import Permission from '../models/Permission';

class PermissionController {
  async index(req, res) {
    const permission = await Permission.findAll();

    return res.json(permission);
  }

  async store(req, res) {
    const { description } = req.body();
    const permission = await Permission.create({ description });

    return res.json({
      permission,
    });
  }
}

export default new PermissionController();
