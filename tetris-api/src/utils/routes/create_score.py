import bcrypt
from src.database import Score, db
from datetime import datetime


def create_score(user_id, score):
    new_score = Score(
        game_date = datetime.now(),
        total_score = score["total_score"],
        broken_rows = score["broken_rows"],
        reached_level = score["reached_level"],
        time = score["time"],
        user_id = user_id
    )
    
    db.session.add(new_score)
    db.session.commit()

    return new_score.serialize()