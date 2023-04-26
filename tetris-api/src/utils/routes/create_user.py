from src.database import db, User
import bcrypt

def create_user(body):
    hashed_password = bcrypt.hashpw(body['password'].encode('utf-8'), bcrypt.gensalt())
    user = User(
        nickname = body['nickname'],
        name = body['name'],
        email = body['email'],
        password = hashed_password,
        is_active = False
        )
    
    db.session.add(user)
    db.session.commit()
    
    return user.serialize()