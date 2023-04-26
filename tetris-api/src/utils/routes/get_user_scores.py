from src.database import Score


def get_user_scores_by_id(id):
    scores = Score.query.filter_by(user_id=id).all()
    
    serialized_scores = [ score.serialize() for score in scores ]
        
    return serialized_scores