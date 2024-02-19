'use strict';
const isValido = require('../../utils/validaCPFHelper.js');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      Pessoa.hasMany(models.Curso, { foreignKey: 'docente_id' });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        scope: { status: 'matriculado' },
        as: 'aulasMatriculadas'
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        as: 'todasMatriculas'
      });

    }
  }
  Pessoa.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 30],
            msg: 'O campo nome deve possuir entre 3 e 30 caracteres.'
          }
        }
      },
      email: {
        type: DataTypes.STRING, validate: {
          isEmail: {
            args: true,
            msg: 'Formato do e-mail inválido.'
          }
        }
      },
      cpf: {
        type: DataTypes.STRING,
        validate: {
          validaCPF: (cpf) => {
            if (!isValido(cpf)) throw new Error('Número do CPF inválido.');
          }
        }
      },
      ativo: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Pessoa',
      tableName: 'pessoas',
      paranoid: 'true',
      defaultScope: {
        where: {
          ativo: true
        }
      },
      scopes: {
        todosOsRegistros: {
          where: {}
        }
      }
    }
  );
  return Pessoa;
};
