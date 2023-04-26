from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import backref
import bcrypt

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nickname = db.Column(db.String, unique=True, nullable=False)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    is_active = db.Column(db.Boolean, nullable=False)
    
    def check_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password)
    
    def __repr__(self) -> str:
        return f"< User: {self.nickname} || Email: {self.email} >"
    
    def serialize(self):
        return {
            "id": self.id,
            "nickname":self.nickname,
            "email":self.email,
            "name": self.name
        }
    
    def get_highscore(self):
        highscore = Score.query.filter_by(user_id=self.id).order_by(Score.total_score.desc()).first().serialize()
        
        return highscore
        
class Score(db.Model):
    id = db.Column(db.Integer, primary_key=True) 
    game_date = db.Column(db.DateTime, nullable=False)
    total_score = db.Column(db.Integer) 
    broken_rows = db.Column(db.Integer)
    reached_level = db.Column(db.Integer)
    time = db.Column(db.Integer)
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user =  db.relationship('User')
    
    def __repr__(self) -> str:
        return self.id
    
    def serialize(self):
        return {
            "id":self.id,
            "total_score": self.total_score,
            "game_date": self.game_date,
            "broken_rows": self.broken_rows,
            "reached_level": self.reached_level,
            "time": self.time,
            "user_id": self.user_id
        }