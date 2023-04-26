from src.database import User, Score

def get_private_info_by_id(id):
    user = User.query.get(id)
    scores =  Score.query.filter_by(user_id=id).all()
    
    response = {
        "user": user.nickname,
        "user_info": user.serialize(),
        "scores": [score.serialize() for score in scores]
    }
    
    return response