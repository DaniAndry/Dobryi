using UnityEngine;

namespace Fix
{
    public class ClickCta : MonoBehaviour
    {
        public void Click()
        {
            Luna.Unity.Playable.InstallFullGame();
            Luna.Unity.LifeCycle.GameEnded();
        }
    }
}