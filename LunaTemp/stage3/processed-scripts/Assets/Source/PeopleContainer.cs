using System.Collections.Generic;
using UnityEngine;

public class PeopleContainer : MonoBehaviour
{
    [SerializeField] private List<People> _peoples;
    [SerializeField] private People _tutorialPeople;
    [SerializeField] private Transform _spawnPoint;
    [SerializeField] private Point _point1;
    [SerializeField] private Point _point2;
    [SerializeField] private Transform _endPoint;
    [SerializeField] private JuiceConfig _juiceConfig;
    [SerializeField] private Tutorial _tutorial;

    public List<People> CurrentPeoples = new List<People>();
    private float _time = 2f;
    private Point _currentPoint;
    private bool _isTutorialPeopleSpawned = false;

    private void Update()
    {
        _time -= Time.deltaTime;

        if (_time <= 0 && _tutorial.IsTutorial == false)
        {
            SpawnRandomPeople();
            _time = 2f;
        }
        else if (_tutorial.IsTutorial && _isTutorialPeopleSpawned == false)
        {
            _isTutorialPeopleSpawned = true;
            SpawnTutorialPeople();
        }
    }

    public bool TryGiveJuice(CupType cupType, JuiceType juiceType, AdditiveType additiveType1,
        AdditiveType additiveType2)
    {
        if (_tutorial.IsTutorial)
        {
            _tutorialPeople.TryGetJuice(CupType.Small, JuiceType.Cherry, AdditiveType.Ice, AdditiveType.None);
            return true;
        }
        
        foreach (var people in CurrentPeoples)
        {
            if (people.TryGetJuice(cupType, juiceType, additiveType1, additiveType2))
            {
                return true;
            }
        }

        return false;
    }

    private void SpawnTutorialPeople()
    {
        _tutorialPeople.gameObject.SetActive(true);
        _tutorialPeople.StartTutorialPeople(_spawnPoint, _point1, _juiceConfig, _tutorial);
    }

    private void SpawnRandomPeople()
    {
        if (_point1.IsFree)
        {
            _point1.Busy();
            Spawn(_point1);
        }
        else if (_point2.IsFree)
        {
            _point2.Busy();
            Spawn(_point2);
        }
        else
        {
            Debug.Log("Points not free");
        }
    }

    private void Spawn(Point point)
    {
        _peoples[0].gameObject.SetActive(true);
        _peoples[0].Init(_spawnPoint, point, _juiceConfig, _tutorial);
        CurrentPeoples.Add(_peoples[0]);
        _peoples[0].Disabling += DeletePeople;
        _peoples.Remove(_peoples[0]);
    }

    private void DeletePeople(People people)
    {
        people.Disabling -= DeletePeople;
        CurrentPeoples.Remove(people);
        _peoples.Add(people);
        people.transform.position = _spawnPoint.position;
    }
}