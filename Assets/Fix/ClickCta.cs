using UnityEngine;

namespace Luna
{
    public class ClickCta : MonoBehaviour
    {
        public void Click()
        {
            Luna.Unity.LifeCycle.GameEnded();
            Luna.Unity.Playable.InstallFullGame();
        }
    }
}