// ====================================================================
// React Application Start
// ====================================================================

// Helper function to format date to YYYY-MM-DD
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Helper function to format month to YYYY-MM
const formatMonthYear = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
};
        // မြန်မာနေ့အမည် ရရန် function
        const getMyanmarDayName = (dateStr) => {
            const days = ["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"];
            const d = new Date(dateStr);
            return days[d.getDay()];
        };
        
// Helper function to generate permutations for "kway" entries
const generateKwayPermutations = (digitsString) => {
  const uniqueDigits = Array.from(new Set(digitsString.split(''))).sort();
  const permutations = new Set();
  if (uniqueDigits.length < 2) return [];

  for (let i = 0; i < uniqueDigits.length; i++) {
    for (let j = 0; j < uniqueDigits.length; j++) {
      if (i !== j) {
        permutations.add(`${uniqueDigits[i]}${uniqueDigits[j]}`);
      }
    }
  }
  return Array.from(permutations);
};

// Helper function to generate numbers for "ဘရိတ်" (Brake) entries
const generateBrakeNumbers = (brakeDigit) => {
  const numbers = new Set();
  const targetLastDigit = parseInt(brakeDigit);
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const sum = i + j;
      if (sum % 10 === targetLastDigit) {
        numbers.add(`${i}${j}`);
      }
    }
  }
  return Array.from(numbers).sort();
};

// Re-mapping Lucide React icons to simple inline SVGs
const ChevronLeft = ({ size = 20, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6"/></svg>;
const ChevronRight = ({ size = 20, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>;
const Plus = ({ size = 28, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 5v14M5 12h14"/></svg>;
const Copy = ({ size = 16, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>;
const Edit = ({ size = 18, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg>;
const Trash2 = ({ size = 18, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>;
const CalendarDays = ({ size = 16, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>;
const BarChart3 = ({ size = 18, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>;
const X = ({ size = 24, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const User = ({ size = 18, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>;
const ArrowLeft = ({ size = 20, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>;
const Loader2 = ({ size = 48, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>;
const Users = ({ size = 18, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const Settings = ({ size = 18, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.39a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.73v.5a2 2 0 0 1-1 1.73l-.15.08a2 2 0 0 0-.73 2.73l.22.39a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2-2l.43-.25a2 2 0 0 1 1-1.73v-.18a2 2 0 0 0 2-2v-.44a2 2 0 0 0-2-2v-.18a2 2 0 0 1-1-1.73l-.43-.25a2 2 0 0 1-2-2l-.15.08a2 2 0 0 0-.73-2.73l.22-.39a2 2 0 0 0 2.73-.73l.15.08a2 2 0 0 1 2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
const Send = ({ size = 18, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M15 15l-5 5"/></svg>;


// Main App Component
const App = () => {
  // --- Firebase States ---
  const [db, setDb] = React.useState(null);
  const [auth, setAuth] = React.useState(null);
  const [userId, setUserId] = React.useState(null); // Firebase Auth UID
  const [isLoading, setIsLoading] = React.useState(true); // Initial loading state for Firebase init and data fetch

  // --- Data Identifier State (for persistence across sessions) ---
  const [dataIdentifier, setDataIdentifier] = React.useState(() => {
    // Initialize from localStorage if available, otherwise empty
    const savedId = localStorage.getItem('user_data_identifier');
    return savedId || '';
  });
  const [dataIdentifierInput, setDataIdentifierInput] = React.useState(dataIdentifier); // Input field state for data identifier
  const [idErrorMessage, setIdErrorMessage] = React.useState(''); // Error message for data identifier input
  const [showDataIdentifierModal, setShowDataIdentifierModal] = React.useState(false); // New state for modal visibility

  // 💰 Commission Rate Management
  const [commissionRate, setCommissionRate] = React.useState(() => {
    const savedRate = localStorage.getItem('commission_rate');
    return savedRate ? parseFloat(savedRate) : 0.15; // default to 15%
  });
  const [commissionRateInput, setCommissionRateInput] = React.useState(commissionRate * 100);
  const [showSettingsModal, setShowSettingsModal] = React.useState(false);

  // --- Date and Result States ---
  const [currentDate, setCurrentDate] = React.useState(formatDate(new Date()));
  const [morningResult, setMorningResult] = React.useState('');
  const [eveningResult, setEveningResult] = React.useState('');
  const [localMorningResultInput, setLocalMorningResultInput] = React.useState('');
  const [localEveningResultInput, setLocalEveningResultInput] = React.useState('');

  // --- Home Page Summary States (Derived from 'entries' and 'results' states) ---
  const [morningTotalSales, setMorningTotalSales] = React.useState(0);
  const [eveningTotalSales, setEveningTotalSales] = React.useState(0);
  const [morningTotalPayout, setMorningTotalPayout] = React.useState(0);
  const [eveningTotalPayout, setEveningTotalPayout] = React.useState(0);
  const [morningTotalWinningBetAmountHome, setMorningTotalWinningBetAmountHome] = React.useState(0);
  const [eveningTotalWinningBetAmountHome, setEveningTotalWinningBetAmountHome] = React.useState(0);

  // --- Entry Management States ---
  const [entries, setEntries] = React.useState([]); // All entries for the CURRENTLY selected day (fetched from Firestore)
  const [selectedEntryType, setSelectedEntryType] = React.useState('morning'); // 'morning' or 'evening'
  const [inputEntry, setInputEntry] = React.useState(''); // Textarea input for new/edited entries
  const [customerNameInput, setCustomerNameInput] = React.useState(''); // Input for customer name
  const [isCustomerNameInputFocused, setIsCustomerNameInputFocused] = React.useState(false); // For managing customer name input focus

  // --- UI/Modal Control States ---
  const [errorMessage, setErrorMessage] = React.useState(''); // Global error message
  const [showErrorModal, setShowErrorModal] = React.useState(false); // Controls error details modal visibility
  const [errorDetails, setErrorDetails] = React.useState([]); // Details of parsing errors
  const [showCustomerEntries, setShowCustomerEntries] = React.useState(false); // Controls individual customer entries detail modal visibility
  const [selectedCustomerForDetail, setSelectedCustomerForDetail] = React.useState(''); // Customer whose entries are being viewed
  const [showOverallSummary, setShowOverallSummary] = React.useState(false); // Controls overall numbers summary modal visibility
  const [showDailySummaryModal, setShowDailySummaryModal] = React.useState(false); // Controls daily profit/loss summary modal visibility
  const [showDatePicker, setShowDatePicker] = React.useState(false); // Controls date picker visibility
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = React.useState(false); // Controls entry deletion confirmation modal
  const [entryToDeleteId, setEntryToDeleteId] = React.useState(null); // ID of entry to be deleted
  const [showCopyConfirmation, setShowCopyConfirmation] = React.useState(false); // Controls copy confirmation message visibility

  // --- Monthly Summary States ---
  const [currentMonth, setCurrentMonth] = React.useState(formatMonthYear(new Date())); // Selected month for monthly summaries
  const [monthlySummary, setMonthlySummary] = React.useState(null); // Data for overall monthly summary
  const [showMonthlySummaryModal, setShowMonthlySummaryModal] = React.useState(false); // Controls monthly summary modal visibility
  const [isMonthlySummaryLoading, setIsMonthlySummaryLoading] = React.useState(false); // Loading state for monthly summary

  // --- Per-Customer Monthly Summary States ---
  const [perCustomerMonthlySummary, setPerCustomerMonthlySummary] = React.useState(null); // Data for per-customer monthly summary
  const [showPerCustomerMonthlySummaryModal, setShowPerCustomerMonthlySummaryModal] = React.useState(false); // Controls per-customer monthly summary modal visibility
  const [isPerCustomerMonthlySummaryLoading, setIsPerCustomerMonthlySummaryLoading] = React.useState(false); // Loading state for per-customer monthly summary

  // --- Customer Management States ---
  const [showManageCustomersModal, setShowManageCustomersModal] = React.useState(false); // Controls customer management modal visibility
  const [customers, setCustomers] = React.useState([]); // Master list of customer names from Firestore
  const [newCustomerName, setNewCustomerName] = React.useState(''); // Input for adding/editing customer names
  const [editingCustomerId, setEditingCustomerId] = React.useState(null); // ID of customer being edited
  const [confirmDeleteCustomerModal, setConfirmDeleteCustomerModal] = React.useState(false); // Controls customer deletion confirmation modal
  const [customerToDeleteId, setCustomerToDeleteId] = React.useState(null); // ID of customer to be deleted

  // --- Navigation state ---
  const [currentPage, setCurrentPage] = React.useState('home'); // 'home' or 'entries'

  // --- New State for "ကာသီး" Modal and selection ---
  const [showKaTheeModal, setShowKaTheeModal] = React.useState(false);
  // Stores the list of numbers selected by the user for the Ka-Thee list
  const [selectedKaTheeNumbers, setSelectedKaTheeNumbers] = React.useState([]);


  // --- Refs for UI elements ---
  const inputRef = React.useRef(null); // Ref for the main entry textarea
  const fixedInputAreaRef = React.useRef(null); // Ref for the fixed bottom input area
  const [fixedInputAreaHeight, setFixedInputAreaHeight] = React.useState(0); // Height of the fixed input area for dynamic padding

  // Calculate the height of the fixed input area for dynamic padding on the entries page
  React.useEffect(() => {
    if (fixedInputAreaRef.current) {
      setFixedInputAreaHeight(fixedInputAreaRef.current.offsetHeight);
    }
  }, [fixedInputAreaRef.current, currentPage]);

  // --- Firebase Initialization and Authentication ---
  React.useEffect(() => {
    const appId = typeof window.__app_id !== 'undefined' ? window.__app_id : 'default-app-id';
    const firebaseConfig = typeof window.__firebase_config !== 'undefined' ? JSON.parse(window.__firebase_config) : {};
    const initialAuthToken = typeof window.__initial_auth_token !== 'undefined' ? window.__initial_auth_token : '';

    if (!firebaseConfig || Object.keys(firebaseConfig).length === 0) {
      console.error("Firebase config is missing. Data persistence will not work.");
      setIsLoading(false);
      return;
    }

    const app = window.firebase.initializeApp(firebaseConfig);
    const database = window.firebase.getFirestore(app);
    const authInstance = window.firebase.getAuth(app);
    setDb(database);
    setAuth(authInstance);

    const unsubscribeAuth = window.firebase.onAuthStateChanged(authInstance, async (user) => {
      if (user) {
        setUserId(user.uid);
        console.log("Firebase Auth State Changed: Logged in as", user.uid);
      } else {
        console.log("Firebase Auth State Changed: No user, attempting anonymous sign-in or custom token.");
        try {
          if (initialAuthToken) {
            await window.firebase.signInWithCustomToken(authInstance, initialAuthToken);
          } else {
            await window.firebase.signInAnonymously(authInstance);
          }
        } catch (error) {
          console.error("Firebase Auth Error:", error);
          setErrorMessage("Authentication failed. Please try again.");
        }
      }
      setIsLoading(false);
    });

    return () => unsubscribeAuth();
  }, []);

  // --- Effect to manage dataIdentifier persistence in localStorage ---
  React.useEffect(() => {
    if (dataIdentifier) {
      localStorage.setItem('user_data_identifier', dataIdentifier);
    } else {
      localStorage.removeItem('user_data_identifier');
    }
  }, [dataIdentifier]);

  // 💰 Effect to manage commissionRate persistence in localStorage
  React.useEffect(() => {
    if (commissionRate) {
      localStorage.setItem('commission_rate', commissionRate.toString());
    }
  }, [commissionRate]);

  // --- Firestore Data Fetching (Entries, Daily Results, and Master Customers) ---
  React.useEffect(() => {
    if (!db || !dataIdentifier) {
      return;
    }

    const appId = typeof window.__app_id !== 'undefined' ? window.__app_id : 'default-app-id';
    const entriesCollectionRef = window.firebase.collection(db, `artifacts/${appId}/data_by_identifier/${dataIdentifier}/entries`);
    const dailyResultDocRef = window.firebase.doc(db, `artifacts/${appId}/data_by_identifier/${dataIdentifier}/dailyResults`, currentDate);
    const customersCollectionRef = window.firebase.collection(db, `artifacts/${appId}/data_by_identifier/${dataIdentifier}/customers`);

    // Fetch Entries
    const qEntries = window.firebase.query(entriesCollectionRef, window.firebase.where('date', '==', currentDate));
    const unsubscribeEntries = window.firebase.onSnapshot(qEntries, (snapshot) => {
      const fetchedEntries = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // createdAt အချိန်အလိုက် အစဉ်လိုက် စီပေးသည်
      const sortedEntries = fetchedEntries.sort((a, b) => a.createdAt.toDate() - b.createdAt.toDate());
      setEntries(sortedEntries);
      console.log(`Fetched ${fetchedEntries.length} entries for ${currentDate}.`);
    }, (error) => {
      console.error("Error fetching entries:", error);
      setErrorMessage("Error loading entries.");
    });

    // Fetch Daily Results
    const unsubscribeResults = window.firebase.onSnapshot(dailyResultDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setMorningResult(data.morningResult || '');
        setEveningResult(data.eveningResult || '');
        setLocalMorningResultInput(data.morningResult || '');
        setLocalEveningResultInput(data.eveningResult || '');
        console.log(`Fetched results for ${currentDate}: Morning=${data.morningResult}, Evening=${data.eveningResult}`);
      } else {
        setMorningResult('');
        setEveningResult('');
        setLocalMorningResultInput('');
        setLocalEveningResultInput('');
        console.log(`No results found for ${currentDate}.`);
      }
    }, (error) => {
      console.error("Error fetching daily results:", error);
      setErrorMessage("Error loading daily results.");
    });

    // Fetch Master Customer List
    const qCustomers = window.firebase.query(customersCollectionRef);
    const unsubscribeCustomers = window.firebase.onSnapshot(qCustomers, (snapshot) => {
      const fetchedCustomers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCustomers(fetchedCustomers.sort((a, b) => a.name.localeCompare(b.name)));
      console.log(`Fetched ${fetchedCustomers.length} master customers.`);
    }, (error) => {
      console.error("Error fetching master customers:", error);
      setErrorMessage("Error loading customer list.");
    });

    return () => {
      unsubscribeEntries();
      unsubscribeResults();
      unsubscribeCustomers();
      setEntries([]);
      setMorningResult('');
      setEveningResult('');
      setLocalMorningResultInput('');
      setLocalEveningResultInput('');
    };
  }, [db, dataIdentifier, currentDate]);

  // --- Recalculate Home Page Totals (Sales, Payouts, Winning Bet Amounts) ---
  React.useEffect(() => {
    const payoutRatePer100 = 8000;
    const calculateTotals = (entries, result) => {
      let totalSales = 0;
      let totalPayout = 0;
      let totalWinningBetAmount = 0;

      entries.forEach(entry => {
        totalSales += calculateTotalAmount(entry.parsedEntries);
        if (result && result.length === 2) {
          entry.parsedEntries.forEach(parsedEntry => {
            if (parsedEntry.number === result) {
              totalPayout += (parsedEntry.amount / 100) * payoutRatePer100;
              totalWinningBetAmount += parsedEntry.amount;
            }
          });
        }
      });
      return { totalSales, totalPayout, totalWinningBetAmount };
    };

    const morningEntries = entries.filter(entry => entry.type === 'morning');
    const eveningEntries = entries.filter(entry => entry.type === 'evening');

    const morningTotals = calculateTotals(morningEntries, morningResult);
    const eveningTotals = calculateTotals(eveningEntries, eveningResult);

    setMorningTotalSales(morningTotals.totalSales);
    setMorningTotalPayout(morningTotals.totalPayout);
    setMorningTotalWinningBetAmountHome(morningTotals.totalWinningBetAmount);

    setEveningTotalSales(eveningTotals.totalSales);
    setEveningTotalPayout(eveningTotals.totalPayout);
    setEveningTotalWinningBetAmountHome(eveningTotals.totalWinningBetAmount);

  }, [entries, morningResult, eveningResult]);

  // --- Helper Function to Calculate Total Amount for Parsed Entries ---
  const calculateTotalAmount = React.useCallback((parsedEntries) => {
    if (!Array.isArray(parsedEntries)) return 0;
    return parsedEntries.reduce((sum, entry) => sum + (entry.amount || 0), 0);
  }, []);

  // --- Calculate Daily Summaries Per Customer (for Entries page) ---
  const calculateCustomerDailySummaries = React.useCallback((entries, morningResult, eveningResult, selectedEntryType) => {
    const grouped = {};
    const payoutRatePer100 = 8000;
    // 💰 Using the dynamic commission rate
    const commissionRateValue = commissionRate;

    const currentWinningResult = selectedEntryType === 'morning' ? morningResult : eveningResult;

    entries.forEach(entry => {
      if (entry.type !== selectedEntryType) return;

      if (!grouped[entry.customerName]) {
        grouped[entry.customerName] = {
          totalSales: 0, totalPayout: 0, totalCommission: 0, netProfitLoss: 0, entries: [], winningNumber: null, winningBetAmount: 0
        };
      }
      grouped[entry.customerName].totalSales += calculateTotalAmount(entry.parsedEntries);

      if (currentWinningResult && currentWinningResult.length === 2) {
        entry.parsedEntries.forEach(parsedEntry => {
          if (parsedEntry.number === currentWinningResult) {
            grouped[entry.customerName].totalPayout += (parsedEntry.amount / 100) * payoutRatePer100;
            grouped[entry.customerName].winningNumber = currentWinningResult;
            grouped[entry.customerName].winningBetAmount += parsedEntry.amount;
          }
        });
      }
      grouped[entry.customerName].entries.push(entry);
    });

    Object.keys(grouped).forEach(customerName => {
      const customerData = grouped[customerName];
      customerData.totalCommission = customerData.totalSales * commissionRateValue;
      customerData.netProfitLoss = customerData.totalSales - customerData.totalCommission - customerData.totalPayout;
    });
    return grouped;
  }, [calculateTotalAmount, morningResult, eveningResult, commissionRate]);

  const customerDailySummaries = calculateCustomerDailySummaries(entries, morningResult, eveningResult, selectedEntryType);

  // --- Calculate Overall Numbers Summary (for Entries page modal) ---
  const getOverallNumbersSummary = React.useCallback(() => {
    const summary = {};
    const filteredEntries = entries.filter(entry => entry.type === selectedEntryType);
    filteredEntries.forEach(entry => {
      if (Array.isArray(entry.parsedEntries)) {
        entry.parsedEntries.forEach(parsedEntry => {
          const num = parsedEntry.number;
          const amount = parsedEntry.amount;
          summary[num] = (summary[num] || 0) + amount;
        });
      }
    });

    const summaryArray = [];
    for (let i = 0; i <= 99; i++) {
      const formattedNumber = String(i).padStart(2, '0');
      if (summary[formattedNumber] !== undefined && summary[formattedNumber] > 0) {
        summaryArray.push(`${formattedNumber} = ${summary[formattedNumber]}`);
      }
    }

    const totalOverallAmount = Object.values(summary).reduce((sum, amount) => sum + amount, 0);
    const uniqueNumbersCount = summaryArray.length;
    return { summaryArray, totalOverallAmount, uniqueNumbersCount, summary };
  }, [entries, selectedEntryType]);

  const { summaryArray, totalOverallAmount, uniqueNumbersCount, summary } = getOverallNumbersSummary();

  // --- Calculate Daily Profit/Loss Summary (for Home page modal) ---
  const calculateDailySummary = React.useCallback(() => {
    const allDailyEntries = entries;
    const totalSales = allDailyEntries.reduce((sum, entry) => sum + calculateTotalAmount(entry.parsedEntries), 0);
    // 💰 Using the dynamic commission rate
    const commissionRateValue = commissionRate;
    let totalPayout = 0;
    let totalWinningBetAmount = 0;
    const payoutRatePer100 = 8000;

    if (morningResult && morningResult.length === 2) {
      allDailyEntries.filter(entry => entry.type === 'morning').forEach(entry => {
        if (Array.isArray(entry.parsedEntries)) {
          entry.parsedEntries.forEach(parsedEntry => {
            if (parsedEntry.number === morningResult) {
              totalPayout += (parsedEntry.amount / 100) * payoutRatePer100;
              totalWinningBetAmount += parsedEntry.amount;
            }
          });
        }
      });
    }
    if (eveningResult && eveningResult.length === 2) {
      allDailyEntries.filter(entry => entry.type === 'evening').forEach(entry => {
        if (Array.isArray(entry.parsedEntries)) {
          entry.parsedEntries.forEach(parsedEntry => {
            if (parsedEntry.number === eveningResult) {
              totalPayout += (parsedEntry.amount / 100) * payoutRatePer100;
              totalWinningBetAmount += parsedEntry.amount;
            }
          });
        }
      });
    }
    const commission = totalSales * commissionRateValue;
    const profitLoss = totalSales - commission - totalPayout;
    return { totalSales, commission, totalPayout, totalWinningBetAmount, profitLoss };
  }, [entries, morningResult, eveningResult, calculateTotalAmount, commissionRate]);

  const dailySummary = calculateDailySummary();

  // --- Function to Parse User Input into Structured Bet Entries ---
  const parseEntryInput = (input) => {
    const parsed = [];
    const errors = [];
    const lines = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    const parseLine = (line) => {
      const cleanLine = line.replace(/\s/g, '');
      let matchFound = false;

      const patterns = {
        doubles: /^အပူး(\d+)$/,
        consecutivePairs: /^ညီကို(\d+)$/,
        fullPower: /^ပါဝါ(\d+)$/,
        fullNakkat: /^နက္ခတ်(\d+)$/,
        mixed: /^(\d{1,2})=(\d+)([Rr])(\d+)$/,
        equal: /^(\d{1,2})=(\d+)$/,
        reverse: /^(\d{1,2})[Rr](\d+)$/,
        dotFormat: /^(\d{1,2}(?:\.\d{1,2})+)([Rr=])(\d+)$/,
        slash: /^(\d{1,2})\/(\d{1,2})([Rr=])(\d+)$/,
        hashFormat: /^(\d{1,2}(?:#\d{1,2})+)([Rr=])(\d+)$/,
        kway: /^(\d+)\s*ခွေ\s*(\d+)$/,
        topBottom: /^(\d)\s*(ထိပ်|ပိတ်)(\d+)$/,
        par: /^(\d)\s*(ပါ|ပါတ်)(\d+)$/,
        brake: /^(\d+)\s*ဘရိတ်\s*(\d+)$/,
      };

      let match;

      if ((match = cleanLine.match(patterns.doubles))) {
        matchFound = true;
        const amount = parseInt(match[1]);
        if (!isNaN(amount)) {
          for (let i = 0; i <= 9; i++) {
            parsed.push({
              number: `${i}${i}`,
              amount: amount
            });
          }
        } else {
          errors.push({
            originalLine: line,
            message: "ပမာဏ မှားယွင်းပါသည်။"
          });
        }
      } else if ((match = cleanLine.match(patterns.consecutivePairs))) {
        matchFound = true;
        const amount = parseInt(match[1]);
        if (!isNaN(amount)) {
          const consecutiveNumbers = new Set();
          for (let i = 0; i < 10; i++) {
            const nextDigit = (i + 1) % 10;
            consecutiveNumbers.add(`${i}${nextDigit}`);
            consecutiveNumbers.add(`${nextDigit}${i}`);
          }
          Array.from(consecutiveNumbers).forEach(num => parsed.push({
            number: num,
            amount: amount
          }));
        } else {
          errors.push({
            originalLine: line,
            message: "ပမာဏ မှားယွင်းပါသည်။"
          });
        }
      } else if ((match = cleanLine.match(patterns.fullPower))) {
        matchFound = true;
        const amount = parseInt(match[1]);
        if (!isNaN(amount)) {
          const powerNumbers = ['05', '50', '16', '61', '27', '72', '38', '83', '49', '94'];
          powerNumbers.forEach(num => parsed.push({
            number: num,
            amount: amount
          }));
        } else {
          errors.push({
            originalLine: line,
            message: "ပမာဏ မှားယွင်းပါသည်။"
          });
        }
      } else if ((match = cleanLine.match(patterns.fullNakkat))) {
        matchFound = true;
        const amount = parseInt(match[1]);
        if (!isNaN(amount)) {
          const nakkatNumbers = ['18', '81', '24', '42', '35', '53', '69', '96', '07', '70'];
          nakkatNumbers.forEach(num => parsed.push({
            number: num,
            amount: amount
          }));
        } else {
          errors.push({
            originalLine: line,
            message: "ပမာဏ မှားယွင်းပါသည်။"
          });
        }
      } else if ((match = cleanLine.match(patterns.mixed))) {
        matchFound = true;
        const num = match[1];
        const amount1 = parseInt(match[2]);
        const amount2 = parseInt(match[4]);
        if (num.length === 2 && !isNaN(amount1) && !isNaN(amount2)) {
          parsed.push({
            number: num,
            amount: amount1
          });
          const reversedNum = num[1] + num[0];
          parsed.push({
            number: reversedNum,
            amount: amount2
          });
        } else {
          errors.push({
            originalLine: line,
            message: "ဂဏန်း သို့မဟုတ် ပမာဏ မှားယွင်းပါသည်။"
          });
        }
      } else if ((match = cleanLine.match(patterns.equal))) {
        matchFound = true;
        const num = match[1];
        const amount = parseInt(match[2]);
        if (num.length === 2 && !isNaN(amount)) {
          parsed.push({
            number: num,
            amount: amount
          });
        } else {
          errors.push({
            originalLine: line,
            message: "ဂဏန်း သို့မဟုတ် ပမာဏ မှားယွင်းပါသည်။"
          });
        }
      } else if ((match = cleanLine.match(patterns.reverse))) {
        matchFound = true;
        const num = match[1];
        const amount = parseInt(match[2]);
        if (num.length === 2 && !isNaN(amount)) {
          parsed.push({
            number: num,
            amount: amount
          });
          const reversedNum = num[1] + num[0];
          parsed.push({
            number: reversedNum,
            amount: amount
          });
        } else {
          errors.push({
            originalLine: line,
            message: "ဂဏန်း သို့မဟုတ် ပမာဏ မှားယွင်းပါသည်။"
          });
        }
      } else if ((match = cleanLine.match(patterns.dotFormat))) {
        matchFound = true;
        const numsStr = match[1];
        const operator = match[2];
        const amount = parseInt(match[3]);
        const numList = numsStr.split('.');
        if (!isNaN(amount) && numList.every(n => n.length === 2 && !isNaN(parseInt(n)))) {
          numList.forEach(num => {
            parsed.push({
              number: num,
              amount: amount
            });
            if (operator.toLowerCase() === 'r') {
              const reversedNum = num[1] + num[0];
              parsed.push({
                number: reversedNum,
                amount: amount
              });
            }
          });
        } else {
          errors.push({
            originalLine: line,
            message: "ဂဏန်း သို့မဟုတ် ပမာဏ မှားယွင်းပါသည်။"
          });
        }
      } else if ((match = cleanLine.match(patterns.slash))) {
        matchFound = true;
        const numsStr = match[1] + '/' + match[2];
        const operator = match[3];
        const amount = parseInt(match[4]);
        const numList = numsStr.split('/');
        if (!isNaN(amount) && numList.every(n => n.length === 2 && !isNaN(parseInt(n)))) {
          numList.forEach(num => {
            parsed.push({
              number: num,
              amount: amount
            });
            if (operator.toLowerCase() === 'r') {
              const reversedNum = num[1] + num[0];
              parsed.push({
                number: reversedNum,
                amount: amount
              });
            }
          });
        } else {
          errors.push({
            originalLine: line,
            message: "ဂဏန်း သို့မဟုတ် ပမာဏ မှားယွင်းပါသည်။"
          });
        }
      } else if ((match = cleanLine.match(patterns.hashFormat))) {
        matchFound = true;
        const numsStr = match[1];
        const operator = match[2];
        const amount = parseInt(match[3]);
        const numList = numsStr.split('#');
        if (!isNaN(amount) && numList.every(n => n.length === 2 && !isNaN(parseInt(n)))) {
          numList.forEach(num => {
            parsed.push({
              number: num,
              amount: amount
            });
            if (operator.toLowerCase() === 'r') {
              const reversedNum = num[1] + num[0];
              parsed.push({
                number: reversedNum,
                amount: amount
              });
            }
          });
        } else {
          errors.push({
            originalLine: line,
            message: "ဂဏန်း သို့မဟုတ် ပမာဏ မှားယွင်းပါသည်။"
          });
        }
      } else if ((match = cleanLine.match(patterns.kway))) {
        matchFound = true;
        const digitsString = match[1];
        const amount = parseInt(match[2]);
        if (!isNaN(amount)) {
          const kwayNumbers = generateKwayPermutations(digitsString);
          if (kwayNumbers.length > 0) {
            kwayNumbers.forEach(num => parsed.push({
              number: num,
              amount: amount
            }));
          } else {
            errors.push({
              originalLine: line,
              message: `'${digitsString}' မှ ဂဏန်းတွဲများ ထုတ်၍ မရပါ။ ဂဏန်းအရေအတွက် အနည်းဆုံး ၂ လုံး လိုအပ်ပါသည်။`
            });
          }
        } else {
          errors.push({
            originalLine: line,
            message: "ပမာဏ မှားယွင်းပါသည်။"
          });
        }
      } else if ((match = cleanLine.match(patterns.topBottom))) {
        matchFound = true;
        const digit = match[1];
        const type = match[2];
        const amount = parseInt(match[3]);
        if (digit.length === 1 && !isNaN(amount)) {
          for (let i = 0; i < 10; i++) {
            let num;
            if (type === 'ထိပ်') {
              num = `${digit}${i}`;
            } else {
              num = `${i}${digit}`;
            }
            parsed.push({
              number: num,
              amount: amount
            });
          }
        } else {
          errors.push({
            originalLine: line,
            message: "ဂဏန်း သို့မဟုတ် ပမာဏ မှားယွင်းပါသည်။"
          });
        }
      } else if ((match = cleanLine.match(patterns.par))) {
        matchFound = true;
        const digit = match[1];
        const amount = parseInt(match[3]);
        if (digit.length === 1 && !isNaN(amount)) {
          const allNumbers = Array.from({
            length: 100
          }, (_, i) => String(i).padStart(2, '0'));
          allNumbers.forEach(num => {
            if (num.includes(digit)) {
              parsed.push({
                number: num,
                amount: amount
              });
            }
          });
        } else {
          errors.push({
            originalLine: line,
            message: "ဂဏန်း သို့မဟုတ် ပမာဏ မှားယွင်းပါသည်။"
          });
        }
      } else if ((match = cleanLine.match(patterns.brake))) {
        matchFound = true;
        const brakeDigit = parseInt(match[1]);
        const amount = parseInt(match[2]);
        if (!isNaN(brakeDigit) && brakeDigit >= 0 && brakeDigit <= 9 && !isNaN(amount)) {
          const brakeNumbers = generateBrakeNumbers(brakeDigit);
          if (brakeNumbers.length > 0) {
            brakeNumbers.forEach(num => parsed.push({
              number: num,
              amount: amount
            }));
          } else {
            errors.push({
              originalLine: line,
              message: `'${brakeDigit}' ဘရိတ်အတွက် ဂဏန်းများ ထုတ်၍ မရပါ။`
            });
          }
        } else {
          errors.push({
            originalLine: line,
            message: "ဘရိတ်ဂဏန်း သို့မဟုတ် ပမာဏ မှားယွင်းပါသည်။"
          });
        }
      }

      if (!matchFound) {
        errors.push({
          originalLine: line,
          message: "မမှန်ကန်သော ထိုးကြေးပုံစံ။"
        });
      }
    };

    lines.forEach(line => parseLine(line));

    return {
      parsed,
      errors
    };
  };

  // --- Add a new entry to Firestore ---
  const addEntry = async () => {
    if (!db || !dataIdentifier) {
      setErrorMessage("User ID မရှိသေးပါ။ ကျေးဇူးပြု၍ User ID ထည့်သွင်းပါ။");
      return;
    }
    setErrorMessage('');
    setErrorDetails([]);
    setShowErrorModal(false);

    if (!customerNameInput.trim()) {
      setErrorMessage("ထိုးသူအမည်ထည့်ရန် လိုအပ်ပါသည်။");
      return;
    }
    if (!inputEntry.trim()) {
      setErrorMessage("ထိုးကြေးထည့်ရန် လိုအပ်ပါသည်။");
      return;
    }

    const {
      parsed,
      errors
    } = parseEntryInput(inputEntry);

    if (errors.length > 0) {
      setErrorDetails(errors);
      setShowErrorModal(true);
      return;
    }

    if (parsed.length === 0) {
      setErrorMessage("ထည့်သွင်းထားသော စာကြောင်းများထဲမှ မှန်ကန်သော ထိုးကြေးပုံစံကို ရှာမတွေ့ပါ။");
      return;
    }

    const newEntry = {
      date: currentDate,
      type: selectedEntryType,
      customerName: customerNameInput.trim(),
      originalInput: inputEntry.trim(),
      parsedEntries: parsed,
      createdAt: new Date(),
    };

    try {
      const appId = typeof window.__app_id !== 'undefined' ? window.__app_id : 'default-app-id';
      await window.firebase.addDoc(window.firebase.collection(db, `artifacts/${appId}/data_by_identifier/${dataIdentifier}/entries`), newEntry);
      setInputEntry('');
      setCustomerNameInput('');
      if (inputRef.current) inputRef.current.value = '';
      setErrorMessage("စာရင်းကို အောင်မြင်စွာ ထည့်သွင်းပြီးပါပြီ။");
      setTimeout(() => setErrorMessage(''), 3000);
    } catch (e) {
      console.error("Error adding document: ", e);
      setErrorMessage("စာရင်းထည့်သွင်းရာတွင် အမှားအယွင်းရှိခဲ့ပါသည်။");
    }
  };

  // --- Update morning/evening results in Firestore ---
  const updateResult = async (type, value) => {
    if (!db || !dataIdentifier) {
      setErrorMessage("User ID မရှိသေးပါ။ ကျေးဇူးပြု၍ User ID ထည့်သွင်းပါ။");
      return;
    }
    const appId = typeof window.__app_id !== 'undefined' ? window.__app_id : 'default-app-id';
    const dailyResultDocRef = window.firebase.doc(db, `artifacts/${appId}/data_by_identifier/${dataIdentifier}/dailyResults`, currentDate);
    try {
      await window.firebase.setDoc(dailyResultDocRef, {
        [type === 'morning' ? 'morningResult' : 'eveningResult']: value,
        updatedAt: new Date()
      }, {
        merge: true
      });
      if (type === 'morning') {
        setMorningResult(value);
      } else {
        setEveningResult(value);
      }
    } catch (e) {
      console.error(`Error updating ${type} result: `, e);
      setErrorMessage(`Error updating ${type} result.`);
    }
  };

  // --- Handle date navigation (previous/next day) ---
  const handleDateChange = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    setCurrentDate(formatDate(newDate));
  };

  // --- Handle manual date selection from date picker ---
  const handleManualDateChange = (e) => {
    setCurrentDate(e.target.value);
    setShowDatePicker(false);
  };

  // --- Show custom delete confirmation modal for an entry ---
  const confirmDeleteEntry = (id) => {
    setEntryToDeleteId(id);
    setShowConfirmDeleteModal(true);
  };

  // --- Execute deletion of an entry from Firestore ---
  const executeDeleteEntry = async () => {
    if (!db || !dataIdentifier || !entryToDeleteId) {
      setErrorMessage("User ID မရှိသေးပါ။ ကျေးဇူးပြု၍ User ID ထည့်သွင်းပါ။ သို့မဟုတ် Database မရပါ။");
      return;
    }
    try {
      const appId = typeof window.__app_id !== 'undefined' ? window.__app_id : 'default-app-id';
      await window.firebase.deleteDoc(window.firebase.doc(db, `artifacts/${appId}/data_by_identifier/${dataIdentifier}/entries`, entryToDeleteId));
      setErrorMessage("စာရင်းကို ဖျက်ပြီးပါပြီ။");
      setShowConfirmDeleteModal(false);
      setEntryToDeleteId(null);
      setTimeout(() => setErrorMessage(''), 3000);
    } catch (e) {
      console.error("Error deleting document: ", e);
      setErrorMessage("စာရင်းဖျက်ရာတွင် အမှားအယွင်းရှိခဲ့ပါသည်။");
    }
  };

  // --- Populate input fields for editing an existing entry ---
  const handleEditEntry = (entry) => {
    setCustomerNameInput(entry.customerName);
    setInputEntry(entry.originalInput);
    setErrorMessage("စာရင်းကို ပြင်ဆင်ရန် အောက်ပါ ထိုးကြေး Input တွင် ပြင်ဆင်ပြီး '+' ခလုပ်ကိုနှိပ်၍ ပြန်လည် ထည့်သွင်းပါ။");
    setShowCustomerEntries(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // --- Monthly Summary Calculations and Data Fetching ---
  const calculateMonthlySummaryData = React.useCallback((fetchedEntries, fetchedResults) => {
    let totalSales = 0;
    let totalPayout = 0;
    let totalWinningBetAmount = 0;
    const payoutRatePer100 = 8000;
    // 💰 Using the dynamic commission rate
    const commissionRateValue = commissionRate;

    fetchedEntries.forEach(entry => {
      totalSales += calculateTotalAmount(entry.parsedEntries);
      const dailyResult = fetchedResults[entry.date];
      if (dailyResult) {
        const winningResult = entry.type === 'morning' ? dailyResult.morningResult : dailyResult.eveningResult;
        if (winningResult && winningResult.length === 2) {
          entry.parsedEntries.forEach(parsedEntry => {
            if (parsedEntry.number === winningResult) {
              totalPayout += (parsedEntry.amount / 100) * payoutRatePer100;
              totalWinningBetAmount += parsedEntry.amount;
            }
          });
        }
      }
    });

    const commission = totalSales * commissionRateValue;
    const profitLoss = totalSales - commission - totalPayout;
    return {
      totalSales,
      commission,
      totalPayout,
      totalWinningBetAmount,
      profitLoss
    };
  }, [calculateTotalAmount, commissionRate]);

  React.useEffect(() => {
    if (!db || !dataIdentifier || !showMonthlySummaryModal) {
      setMonthlySummary(null);
      return;
    }

    setIsMonthlySummaryLoading(true);
    const appId = typeof window.__app_id !== 'undefined' ? window.__app_id : 'default-app-id';
    const [year, month] = currentMonth.split('-').map(Number);
    const startOfMonth = new Date(year, month - 1, 1);
    const endOfMonth = new Date(year, month, 0);

    const fetchMonthlyData = async () => {
      try {
        const entriesCollectionRef = window.firebase.collection(db, `artifacts/${appId}/data_by_identifier/${dataIdentifier}/entries`);
        const qEntriesMonth = window.firebase.query(
          entriesCollectionRef,
          window.firebase.where('date', '>=', formatDate(startOfMonth)),
          window.firebase.where('date', '<=', formatDate(endOfMonth))
        );
        const entriesSnapshot = await window.firebase.getDocs(qEntriesMonth);
        const fetchedMonthlyEntries = entriesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const uniqueDatesInMonthWithEntries = [...new Set(fetchedMonthlyEntries.map(entry => entry.date))];
        const fetchedResults = {};
        for (const dateString of uniqueDatesInMonthWithEntries) {
          const resultDocRef = window.firebase.doc(db, `artifacts/${appId}/data_by_identifier/${dataIdentifier}/dailyResults`, dateString);
          const resultSnap = await window.firebase.getDoc(resultDocRef);
          if (resultSnap.exists()) {
            fetchedResults[dateString] = resultSnap.data();
          }
        }

        const monthlySummaryCalculated = calculateMonthlySummaryData(fetchedMonthlyEntries, fetchedResults);
        setMonthlySummary(monthlySummaryCalculated);
      } catch (error) {
        console.error("Error fetching monthly data:", error);
        setErrorMessage("Error loading monthly summary.");
      } finally {
        setIsMonthlySummaryLoading(false);
      }
    };

    fetchMonthlyData();
  }, [db, dataIdentifier, currentMonth, showMonthlySummaryModal, calculateMonthlySummaryData]);

  // Handle month navigation
  const handleMonthChange = (months) => {
    const [year, month] = currentMonth.split('-').map(Number);
    const newDate = new Date(year, month - 1 + months, 1);
    setCurrentMonth(formatMonthYear(newDate));
  };

  // Handle manual month selection
  const handleManualMonthChange = (e) => {
    setCurrentMonth(e.target.value);
  };

  // --- Per-Customer Monthly Summary Calculations and Data Fetching ---
  const calculatePerCustomerMonthlySummaryData = React.useCallback((fetchedEntries, fetchedResults) => {
    const groupedCustomers = {};
    const payoutRatePer100 = 8000;

    fetchedEntries.forEach(entry => {
      if (!groupedCustomers[entry.customerName]) {
        groupedCustomers[entry.customerName] = {
          totalSales: 0,
          totalPayout: 0,
          profitLoss: 0,
          totalWinningBetAmount: 0,
        };
      }

      groupedCustomers[entry.customerName].totalSales += calculateTotalAmount(entry.parsedEntries);
      const dailyResult = fetchedResults[entry.date];
      if (dailyResult) {
        const winningResult = entry.type === 'morning' ? dailyResult.morningResult : dailyResult.eveningResult;
        if (winningResult && winningResult.length === 2) {
          entry.parsedEntries.forEach(parsedEntry => {
            if (parsedEntry.number === winningResult) {
              groupedCustomers[entry.customerName].totalPayout += (parsedEntry.amount / 100) * payoutRatePer100;
              groupedCustomers[entry.customerName].totalWinningBetAmount += parsedEntry.amount;
            }
          });
        }
      }
    });

    Object.keys(groupedCustomers).forEach(customerName => {
      const customerData = groupedCustomers[customerName];
      customerData.profitLoss = customerData.totalSales - customerData.totalPayout;
    });

    return Object.entries(groupedCustomers).map(([customerName, data]) => ({
      customerName,
      ...data
    })).sort((a, b) => b.totalSales - a.totalSales);
  }, [calculateTotalAmount]);

  React.useEffect(() => {
    if (!db || !dataIdentifier || !showPerCustomerMonthlySummaryModal) {
      setPerCustomerMonthlySummary(null);
      return;
    }

    setIsPerCustomerMonthlySummaryLoading(true);
    const appId = typeof window.__app_id !== 'undefined' ? window.__app_id : 'default-app-id';
    const [year, month] = currentMonth.split('-').map(Number);
    const startOfMonth = new Date(year, month - 1, 1);
    const endOfMonth = new Date(year, month, 0);

    const fetchPerCustomerMonthlyData = async () => {
      try {
        const entriesCollectionRef = window.firebase.collection(db, `artifacts/${appId}/data_by_identifier/${dataIdentifier}/entries`);
        const qEntriesMonth = window.firebase.query(
          entriesCollectionRef,
          window.firebase.where('date', '>=', formatDate(startOfMonth)),
          window.firebase.where('date', '<=', formatDate(endOfMonth))
        );
        const entriesSnapshot = await window.firebase.getDocs(qEntriesMonth);
        const fetchedMonthlyEntries = entriesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const uniqueDatesInMonthWithEntries = [...new Set(fetchedMonthlyEntries.map(entry => entry.date))];
        const fetchedResults = {};
        for (const dateString of uniqueDatesInMonthWithEntries) {
          const resultDocRef = window.firebase.doc(db, `artifacts/${appId}/data_by_identifier/${dataIdentifier}/dailyResults`, dateString);
          const resultSnap = await window.firebase.getDoc(resultDocRef);
          if (resultSnap.exists()) {
            fetchedResults[dateString] = resultSnap.data();
          }
        }

        const perCustomerMonthlySummaryCalculated = calculatePerCustomerMonthlySummaryData(fetchedMonthlyEntries, fetchedResults);
        setPerCustomerMonthlySummary(perCustomerMonthlySummaryCalculated);
      } catch (error) {
        console.error("Error fetching per-customer monthly data:", error);
        setErrorMessage("Error loading per-customer monthly summary.");
      } finally {
        setIsPerCustomerMonthlySummaryLoading(false);
      }
    };

    fetchPerCustomerMonthlyData();
  }, [db, dataIdentifier, currentMonth, showPerCustomerMonthlySummaryModal, calculatePerCustomerMonthlySummaryData]);

  // --- Customer Management Functions ---
  const handleAddOrUpdateCustomer = async () => {
    if (!db || !dataIdentifier) {
      setErrorMessage("User ID မရှိသေးပါ။ ကျေးဇူးပြု၍ User ID ထည့်သွင်းပါ။");
      return;
    }
    if (!newCustomerName.trim()) {
      setErrorMessage("ထိုးသူအမည် ထည့်သွင်းရန် လိုအပ်ပါသည်။");
      return;
    }

    const appId = typeof window.__app_id !== 'undefined' ? window.__app_id : 'default-app-id';
    const customersCollectionRef = window.firebase.collection(db, `artifacts/${appId}/data_by_identifier/${dataIdentifier}/customers`);

    try {
      if (editingCustomerId) {
        await window.firebase.updateDoc(window.firebase.doc(customersCollectionRef, editingCustomerId), {
          name: newCustomerName.trim()
        });
        setErrorMessage("ထိုးသူအမည် ပြင်ဆင်ပြီးပါပြီ။");
      } else {
        const q = window.firebase.query(customersCollectionRef, window.firebase.where("name", "==", newCustomerName.trim()));
        const querySnapshot = await window.firebase.getDocs(q);
        if (!querySnapshot.empty) {
          setErrorMessage("ဤထိုးသူအမည် ရှိပြီးသား ဖြစ်ပါသည်။");
          return;
        }
        await window.firebase.addDoc(customersCollectionRef, {
          name: newCustomerName.trim(),
          createdAt: new Date()
        });
        setErrorMessage("ထိုးသူအမည် အောင်မြင်စွာ ထည့်သွင်းပြီးပါပြီ။");
      }
      setNewCustomerName('');
      setEditingCustomerId(null);
      setTimeout(() => setErrorMessage(''), 3000);
    } catch (e) {
      console.error("Error managing customer:", e);
      setErrorMessage("ထိုးသူအမည် စီမံရာတွင် အမှားအယွင်းရှိခဲ့ပါသည်။");
    }
  };

  const startEditCustomer = (customer) => {
    setNewCustomerName(customer.name);
    setEditingCustomerId(customer.id);
  };

  const confirmDeleteCustomer = (id) => {
    setCustomerToDeleteId(id);
    setConfirmDeleteCustomerModal(true);
  };

  const executeDeleteCustomer = async () => {
    if (!db || !dataIdentifier || !customerToDeleteId) {
      setErrorMessage("User ID မရှိသေးပါ။ ကျေးဇူးပြု၍ User ID ထည့်သွင်းပါ။ သို့မဟုတ် Database မရပါ။");
      return;
    }
    const appId = typeof window.__app_id !== 'undefined' ? window.__app_id : 'default-app-id';
    try {
      await window.firebase.deleteDoc(window.firebase.doc(customersCollectionRef, customerToDeleteId));
      setErrorMessage("ထိုးသူအမည် ဖျက်ပြီးပါပြီ။");
      setConfirmDeleteCustomerModal(false);
      setCustomerToDeleteId(null);
      setTimeout(() => setErrorMessage(''), 3000);
    } catch (e) {
      console.error("Error deleting customer:", e);
      setErrorMessage("ထိုးသူအမည် ဖျက်ရာတွင် အမှားအယွင်းရှိခဲ့ပါသည်။");
    }
  };

  // --- Function to handle saving the user-provided data identifier ---
  const handleSaveDataIdentifier = () => {
    if (!dataIdentifierInput.trim()) {
      setIdErrorMessage("မသိမ်းဆည်းမီ User ID သို့မဟုတ် Nickname ထည့်သွင်းပါ။");
      return;
    }
    setDataIdentifier(dataIdentifierInput.trim());
    setIdErrorMessage("");
    setErrorMessage("User ID ကို အောင်မြင်စွာ သိမ်းဆည်းပြီးပါပြီ။");
    setTimeout(() => setErrorMessage(''), 3000);
    console.log("Data identifier updated to:", dataIdentifierInput.trim());
    setShowDataIdentifierModal(false);
  };

  // 💰 Handle saving the commission rate
  const handleSaveCommissionRate = () => {
    const newRate = parseFloat(commissionRateInput);
    if (isNaN(newRate) || newRate < 0 || newRate > 100) {
      setErrorMessage("မှန်ကန်သော ရာခိုင်နှုန်းကို ထည့်သွင်းပါ။ (0-100)");
      return;
    }
    setCommissionRate(newRate / 100);
    setErrorMessage("ကော်မရှင်ရာခိုင်နှုန်းကို အောင်မြင်စွာ ပြင်ဆင်ပြီးပါပြီ။");
    setTimeout(() => setErrorMessage(''), 3000);
    setShowSettingsModal(false);
  };

  // --- Utility function for copying text to clipboard ---
  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setShowCopyConfirmation(true);
      setTimeout(() => setShowCopyConfirmation(false), 2000);
    } catch (err) {
      console.error('ကူးယူရန် မအောင်မြင်ပါ- ', err);
      setErrorMessage('ကူးယူရန် မအောင်မြင်ပါ။');
    }
    document.body.removeChild(textArea);
  };

  // Function to handle toggling a number in the Ka-Thee list
  const handleKaTheeToggle = (number) => {
    setSelectedKaTheeNumbers(prevSelected => {
      if (prevSelected.includes(number)) {
        return prevSelected.filter(n => n !== number);
      } else {
        return [...prevSelected, number];
      }
    });
  };

  // Function to handle copying the Ka-Thee list
  const handleCopyKaThee = (listType) => {
    let textToCopy = '';
    const payoutRatePer100 = 8000;
    const currentResult = selectedEntryType === 'morning' ? morningResult : eveningResult;
    const winningBetAmount = currentResult ? (summary[currentResult] || 0) : 0;
    const totalPayout = currentResult ? (winningBetAmount / 100) * payoutRatePer100 : 0;

    if (listType === 'kaThee') {
      const sortedKaTheeNumbers = selectedKaTheeNumbers.map(num => ({
        number: num,
        amount: summary[num] || 0
      })).sort((a, b) => {
        if (a.amount !== b.amount) {
          return b.amount - a.amount;
        }
        return a.number.localeCompare(b.number);
      });

      textToCopy = sortedKaTheeNumbers.map(item => `${item.number} = ${item.amount}`).join('\n');
      const totalAmount = sortedKaTheeNumbers.reduce((total, item) => total + item.amount, 0);
      const profitLoss = totalAmount - totalPayout;
      const profitLossText = profitLoss >= 0 ? `အမြတ်=${profitLoss.toLocaleString()}` : `အရှုံး=${Math.abs(profitLoss).toLocaleString()}`;

      textToCopy += `\n--------------------\n`;
      textToCopy += `ပေါက်=${winningBetAmount.toLocaleString()}\n`;
      textToCopy += `ပေးရန်=${totalPayout.toLocaleString()}\n`;
      textToCopy += `Total=${totalAmount.toLocaleString()}\n`;
      textToCopy += `အမြတ်/အရှုံး=${profitLossText}`;

    } else if (listType === 'kan') {
      const kanNumbers = Array.from({
        length: 100
      }, (_, i) => String(i).padStart(2, '0')).filter(num => !selectedKaTheeNumbers.includes(num));

      const sortedKanNumbers = kanNumbers.map(num => ({
        number: num,
        amount: summary[num] || 0
      })).filter(item => item.amount > 0).sort((a, b) => {
        if (a.amount !== b.amount) {
          return b.amount - a.amount;
        }
        return a.number.localeCompare(b.number);
      });

      textToCopy = sortedKanNumbers.map(item => `${item.number} = ${item.amount}`).join('\n');
      const totalAmount = sortedKanNumbers.reduce((total, item) => total + item.amount, 0);
      const profitLoss = totalAmount - totalPayout;
      const profitLossText = profitLoss >= 0 ? `အမြတ်=${profitLoss.toLocaleString()}` : `အရှုံး=${Math.abs(profitLoss).toLocaleString()}`;

      textToCopy += `\n--------------------\n`;
      textToCopy += `ပေါက်=${winningBetAmount.toLocaleString()}\n`;
      textToCopy += `ပေးရန်=${totalPayout.toLocaleString()}\n`;
      textToCopy += `Total=${totalAmount.toLocaleString()}\n`;
      textToCopy += `အမြတ်/အရှုံး=${profitLossText}`;
    }
    copyToClipboard(textToCopy);
    setShowKaTheeModal(false);
  };

  // Effect to pre-select numbers when the Ka-Thee modal is opened
  React.useEffect(() => {
    if (showKaTheeModal) {
      const numbersWithAmount = Object.keys(summary).filter(num => summary[num] > 0);
      setSelectedKaTheeNumbers(numbersWithAmount);
    }
  }, [showKaTheeModal, summary]);

  // Render a loading spinner if Firebase is still initializing
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-inter text-gray-800">
        <Loader2 size={48} className="animate-spin text-blue-500 mb-4" />
        <p className="text-lg font-semibold text-gray-700">🇲🇲 LOADING 🇲🇲...</p>
      </div>
    );
  }

  // Main App JSX Structure
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-inter text-gray-800 pb-20">
      {/* --- Header Section (Always Visible) --- */}
      <div className="p-4 bg-white shadow-md rounded-b-lg mb-4">
        <div className="flex justify-between items-center mb-3">
          {/* Back button */}
          {currentPage === 'entries' && (
            <button onClick={() => setCurrentPage('home')} className="p-2 bg-gray-200 text-gray-700 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300 transform active:scale-95 transition-transform" aria-label="Back to Home">
              <ArrowLeft size={20} />
            </button>
          )}
          {currentPage === 'home' && (<div className="w-10"></div>)}

          {/* Date Navigation and Calendar Icon */}
          {currentPage === 'home' && (
            <>
              <button onClick={() => handleDateChange(-1)} className="p-2 bg-blue-500 text-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transform active:scale-95 transition-transform" aria-label="Previous Day">
                <ChevronLeft size={20} />
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className="text-base font-semibold text-blue-700 py-1 px-3 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 transform active:scale-95 transition-transform"
                  aria-label={`Selected Date: ${new Date(currentDate).toLocaleDateString('my-MM', {
                    weekday: 'short'
                  })}, ${new Date(currentDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}`}
                >
                  {new Date(currentDate).toLocaleDateString('my-MM', {
                    weekday: 'short'
                  })}, {new Date(currentDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                  <CalendarDays size={16} className="inline-block ml-1" />
                </button>
                {showDatePicker && (
                  <input
                    type="date"
                    value={currentDate}
                    onChange={handleManualDateChange}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-2 border border-gray-300 rounded-md shadow-lg z-10"
                  />
                )}
              </div>
              <button onClick={() => handleDateChange(1)} className="p-2 bg-blue-500 text-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transform active:scale-95 transition-transform" aria-label="Next Day">
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Result Inputs and Overall Summary Button */}
          {currentPage === 'entries' && (
            <div className="flex-1 flex justify-end items-center space-x-2">
              {selectedEntryType === 'morning' && (
                <>
                  <span className="text-sm font-bold text-blue-700 mr-2">Total = {morningTotalSales.toLocaleString()}</span>
                  <label htmlFor="morningResultInput" className="text-sm font-medium text-gray-700">မနက်:</label>
                  <input
                    id="morningResultInput" type="text" value={localMorningResultInput} onChange={(e) => setLocalMorningResultInput(e.target.value)}
                    onBlur={(e) => updateResult('morning', e.target.value)} className="w-16 p-1 border border-gray-300 rounded-md text-center text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                    placeholder="00" maxLength="2" aria-label="Morning Result"
                  />
                </>
              )}
              {selectedEntryType === 'evening' && (
                <>
                  <span className="text-sm font-bold text-green-700 mr-2">Total = {eveningTotalSales.toLocaleString()}</span>
                  <label htmlFor="eveningResultInput" className="text-sm font-medium text-gray-700">ညနေ:</label>
                  <input
                    id="eveningResultInput" type="text" value={localEveningResultInput} onChange={(e) => setLocalEveningResultInput(e.target.value)}
                    onBlur={(e) => updateResult('evening', e.target.value)} className="w-16 p-1 border border-gray-300 rounded-md text-center text-sm focus:outline-none focus:ring-1 focus:ring-green-400"
                    placeholder="00" maxLength="2" aria-label="Evening Result"
                  />
                </>
              )}
              <button
                onClick={() => setShowOverallSummary(true)}
                className="p-2 bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-red-400 active:scale-95"
                title="စုစုပေါင်း ဂဏန်းစာရင်း" aria-label="Overall Numbers Summary"
              >
                <BarChart3 size={20} />
              </button>
              
            </div>
          )}
        </div>

        {/* Action Buttons for Home Page */}
        {currentPage === 'home' && (
          <div className="text-center my-3 flex justify-center space-x-2 flex-wrap">
            <button
              onClick={() => {
                setShowDailySummaryModal(true);
              }}
              className="inline-flex items-center justify-center px-4 py-2 bg-indigo-500 text-white text-sm font-medium rounded-full shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 transform active:scale-95 transition-transform mb-2"
              title="ရက်ချုပ်စာရင်း" aria-label="Daily Summary"
            >
              <BarChart3 size={18} className="mr-2" /> ရက်ချုပ်
            </button>
            <button
              onClick={() => {
                setShowMonthlySummaryModal(true);
              }}
              className="inline-flex items-center justify-center px-4 py-2 bg-pink-500 text-white text-sm font-medium rounded-full shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 transform active:scale-95 transition-transform mb-2"
              title="လချုပ်စာရင်း (ကော်မရှင်ပါ)" aria-label="Monthly Summary"
            >
              <CalendarDays size={18} className="mr-2" /> လချုပ်
            </button>
            <button
              onClick={() => {
                setShowPerCustomerMonthlySummaryModal(true);
              }}
              className="inline-flex items-center justify-center px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-full shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 transform active:scale-95 transition-transform mb-2"
              title="တစ်ဦးချင်း လချုပ် (ကော်မရှင်မပါ)" aria-label="Per Customer Monthly Summary"
            >
              <User size={18} className="mr-2" /> တစ်ဦးချင်း လချုပ်
            </button>
            <button
              onClick={() => {
                setShowManageCustomersModal(true);
              }}
              className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transform active:scale-95 transition-transform mb-2"
              title="ထိုးသူများ စီမံရန်" aria-label="Manage Customers"
            >
              <Users size={18} className="mr-2" /> ထိုးသူများ စီမံရန်
            </button>
            <button
              onClick={() => setShowSettingsModal(true)}
              className="inline-flex items-center justify-center px-4 py-2 bg-gray-500 text-white text-sm font-medium rounded-full shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transform active:scale-95 transition-transform mb-2"
              title="Setting" aria-label="Settings"
            >
              <Settings size={18} className="mr-2" /> Setting
            </button>
          </div>
        )}
        {currentPage === 'home' && dataIdentifier && (
          <p className="text-xs text-gray-500 text-center mt-2">
            လက်ရှိ ID: <span className="font-bold text-gray-700">{dataIdentifier}</span>
          </p>
        )}

        {/* Morning/Evening Result Displays for Home Page (clickable to navigate) */}
        {currentPage === 'home' && (
          <div className="flex flex-col items-center space-y-4 mt-4">
            <div className="flex items-center w-11/12 mx-auto px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer" onClick={() => {
              setCurrentPage('entries');
              setSelectedEntryType('morning');
            }}>
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-sm font-bold mr-3">
                {morningResult || '??'}
              </div>
              <span className="flex-1 text-base text-gray-700">မနက်</span>
              <span className="text-xl font-bold text-gray-800">
                {morningTotalSales.toLocaleString()}
                {morningResult && (
                  morningTotalWinningBetAmountHome > 0 ? <span className="ml-2 text-green-600">P-{morningTotalWinningBetAmountHome.toLocaleString()}</span> : <span className="ml-2 text-red-600">P-No</span>
                )}
              </span>
            </div>
            <div className="flex items-center w-11/12 mx-auto px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer" onClick={() => {
              setCurrentPage('entries');
              setSelectedEntryType('evening');
            }}>
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 text-sm font-bold mr-3">
                {eveningResult || '??'}
              </div>
              <span className="flex-1 text-base text-gray-700">ညနေ</span>
              <span className="text-xl font-bold text-gray-800">
                {eveningTotalSales.toLocaleString()}
                {eveningResult && (
                  eveningTotalWinningBetAmountHome > 0 ? <span className="ml-2 text-green-600">P-{eveningTotalWinningBetAmountHome.toLocaleString()}</span> : <span className="ml-2 text-red-600">P-No</span>
                )}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* --- Main Content Area --- */}
{currentPage === 'entries' && (
  <div className="flex-1 px-4 pt-2 overflow-y-auto" style={{ paddingBottom: `${fixedInputAreaHeight + 20}px` }}>
    <div className="mb-4 overflow-x-auto whitespace-nowrap hide-scrollbar">
      {customers.map(c => <button key={c.id} onClick={() => setCustomerNameInput(c.name)} className="px-4 py-2 mr-2 bg-purple-100 text-purple-800 text-sm rounded-full shadow-sm">{c.name}</button>)}
    </div>
    {Object.entries(customerDailySummaries).map(([name, data]) => (
      <div key={name} className="bg-white p-4 rounded-lg shadow-md mb-3 relative">
        <h3 className="text-base font-bold text-indigo-700 mb-1">{name}</h3>
        <button onClick={() => { setSelectedCustomerForDetail(name); setShowCustomerEntries(true); }} className="w-full text-left">
          <div className="text-base font-semibold text-teal-700">
            {new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric' })}-{getMyanmarDayName(currentDate)}/{selectedEntryType === 'morning' ? 'မနက်' : 'ည‌နေ'}-{data.totalSales.toLocaleString()}
          </div>
          {((selectedEntryType === 'morning' ? morningResult : eveningResult).length === 2) && (
            <p className={`text-sm mt-1 ${data.winningBetAmount > 0 ? 'text-green-600 font-bold' : 'text-red-600'}`}>
              {data.winningBetAmount > 0 ? `(${data.winningNumber})P-${data.winningBetAmount.toLocaleString()}💥💯💯` : `(${selectedEntryType === 'morning' ? morningResult : eveningResult})P-No💥💥💥`}
            </p>
          )}
        </button>
        <button
          onClick={() => {
            const dayNum = new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric' });
            const dayName = getMyanmarDayName(currentDate);
            const session = selectedEntryType === 'morning' ? 'မနက်' : 'ည‌နေ';
            const firstLine = `${dayNum}-${dayName}/${session}-${data.totalSales.toLocaleString()}`;
            let secondLine = '';
            const res = selectedEntryType === 'morning' ? morningResult : eveningResult;
            if (res && res.length === 2) {
              secondLine = data.winningBetAmount > 0 ? `(${res})P-${data.winningBetAmount.toLocaleString()}💥💯💯` : `(${res})P-No💥💥💥`;
            }
            copyToClipboard(`${firstLine}\n\n${secondLine}`.trim());
          }}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full"
        ><Copy size={16}/></button>
      </div>
    ))}
  </div>
)}

      {/* --- Input Area at the bottom of the screen (fixed position) --- */}
      {currentPage === 'entries' && (
        <div ref={fixedInputAreaRef} className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-top rounded-t-xl z-30">
          {errorMessage && (<p className="text-red-600 text-sm mb-2 text-center">{errorMessage}</p>)}
          <div className="mb-2 w-full">
            <input
              type="text" className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 shadow-sm w-full placeholder-gray-400"
              placeholder="ထိုးသူအမည် ထည့်ပါ" value={customerNameInput} onChange={(e) => {
                setCustomerNameInput(e.target.value);
              }}
              onFocus={() => setIsCustomerNameInputFocused(true)} onBlur={() => setIsCustomerNameInputFocused(false)} aria-label="Customer Name"
            />
          </div>
          <div className="flex items-end space-x-2 w-full">
            <textarea
              ref={inputRef}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none h-24 shadow-sm placeholder-gray-400"
              placeholder=""
              value={inputEntry} onChange={(e) => setInputEntry(e.target.value)} aria-label="Entry Text"
            ></textarea>
            <button
              onClick={addEntry}
              className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Add Entry"
            >
              <Plus size={28} />
            </button>
          </div>
          <div className="h-8"></div>
        </div>
      )}

      {/* --- FAB for User ID on Home Page --- */}
      {currentPage === 'home' && (
        <button
          onClick={() => setShowDataIdentifierModal(true)}
          className="fixed bottom-4 right-4 p-4 bg-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-400 z-40"
          title="User ID သတ်မှတ်ရန်"
          aria-label="Set User ID"
        >
          <User size={28} />
        </button>
      )}


      {/* --- Modals Section --- */}

      {/* User Data Identifier Modal */}
      {showDataIdentifierModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-blue-700">User ID သို့မဟုတ် Nickname</h2>
              <button onClick={() => setShowDataIdentifierModal(false)} className="text-gray-500 hover:text-gray-700 transform active:scale-95 transition-transform" aria-label="Close User ID Modal">
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700 font-semibold mb-3">
                ဒေတာများ လုံခြုံစွာ သိမ်းဆည်းနိုင်ရန် သင်၏ User ID သို့မဟုတ် Nickname ကို ရိုက်ထည့်ပါ။ ဤ ID ကို မမေ့ပါနှင့်။
              </p>
              {idErrorMessage && (<p className="text-red-600 text-sm mb-2 text-center">{idErrorMessage}</p>)}
              <div className="flex flex-col space-y-3">
                <input
                  type="text"
                  value={dataIdentifierInput}
                  onChange={(e) => {
                    setDataIdentifierInput(e.target.value);
                    setIdErrorMessage('');
                  }}
                  placeholder="User ID/Nickname ကို ရိုက်ထည့်ပါ"
                  className="p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
                  aria-label="User Data Identifier Input"
                />
                <button
                  onClick={handleSaveDataIdentifier}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transform active:scale-95 transition-transform text-sm"
                >
                  သိမ်းဆည်းမည်
                </button>
              </div>
              {dataIdentifier && (
                <p className="text-xs text-gray-500 text-center mt-3 p-2 bg-gray-50 rounded-md border border-gray-200">
                  လက်ရှိ ID: <span className="font-bold text-gray-700">{dataIdentifier}</span>
                  <br />
                  <span className="text-red-500 font-bold">ဤ ID ကို ပြောင်းလဲပါက ယခင်ဒေတာများ မတွေ့ရတော့ပါ။</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 💰 Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-gray-700">Settings</h2>
              <button onClick={() => setShowSettingsModal(false)} className="text-gray-500 hover:text-gray-700 transform active:scale-95 transition-transform" aria-label="Close Settings Modal">
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700 font-semibold mb-3">ကော်မရှင်ရာခိုင်နှုန်း (%) ပြောင်းလဲပါ</p>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={commissionRateInput}
                  onChange={(e) => setCommissionRateInput(e.target.value)}
                  placeholder="15"
                  min="0"
                  max="100"
                  className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
                />
                <span className="text-lg text-gray-700">%</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">လက်ရှိ ကော်မရှင်နှုန်း: {commissionRate * 100}%</p>
              <button
                onClick={handleSaveCommissionRate}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transform active:scale-95 transition-transform text-sm w-full"
              >
                သိမ်းဆည်းမည်
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Customer Entries Detail Modal */}
      {showCustomerEntries && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-gray-800">{selectedCustomerForDetail} ၏ စာရင်းများ</h2>
              <button onClick={() => setShowCustomerEntries(false)} className="text-gray-500 hover:text-gray-700 transform active:scale-95 transition-transform" aria-label="Close Customer Entries">
                <X size={24} />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              {customerDailySummaries[selectedCustomerForDetail]?.entries.map((entry, index) => (
                <div key={entry.id} className="bg-gray-50 p-3 rounded-md mb-2 shadow-sm relative">
                  <p className="text-sm text-gray-700 font-medium break-words pr-8 whitespace-pre-line">
                    <span className="font-bold text-blue-500 mr-2">{index + 1}.</span> {entry.originalInput}
                  </p>
                  <button
                    onClick={() => copyToClipboard(entry.originalInput)}
                    className="absolute top-2 right-2 p-1.5 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transform active:scale-95 transition-transform"
                    title="ဤစာရင်းကို ကူးယူပါ" aria-label="Copy Original Entry"
                  >
                    <Copy size={16} />
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    Total = {calculateTotalAmount(entry.parsedEntries).toLocaleString()}
                  </p>
                  <div className="flex justify-end space-x-2 mt-2">
                    <button
                      onClick={() => handleEditEntry(entry)}
                      className="p-1 rounded-full text-blue-500 hover:bg-blue-100 transform active:scale-95 transition-transform" aria-label="Edit Entry"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => confirmDeleteEntry(entry.id)}
                      className="p-1 rounded-full text-red-500 hover:bg-red-100 transform active:scale-95 transition-transform" aria-label="Delete Entry"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t text-right">
              <span className="text-base font-bold text-gray-800">
                Total= {customerDailySummaries[selectedCustomerForDetail]?.totalSales.toLocaleString()}
              </span>
            </div>
          </div>
          {showCopyConfirmation && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in-out">
              စာရင်းကို ကူးယူပြီးပါပြီ။
            </div>
          )}
        </div>
      )}

      {/* Overall Numbers Summary Modal */}
      {showOverallSummary && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm max-h-[90vh] flex flex-col relative">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-purple-700">စုစုပေါင်း ဂဏန်းစာရင်း ({uniqueNumbersCount})ကွက်</h2>
              <button onClick={() => setShowOverallSummary(false)} className="text-gray-500 hover:text-gray-700 transform active:scale-95 transition-transform" aria-label="Close Overall Summary">
                <X size={24} />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              {summaryArray.length === 0 ? (
                <p className="text-center text-gray-500 text-sm">စာရင်းမရှိသေးပါ။</p>
              ) : (
                summaryArray.map((item, index) => (<p key={index} className="text-base text-gray-700 mb-1">{item}</p>))
              )}
            </div>
            <div className="p-4 border-t flex justify-between items-center">
              <span className="text-lg font-bold text-blue-700">Total = {totalOverallAmount.toLocaleString()}</span>
              <button
                onClick={() => {
                  const textToCopy = summaryArray.join('\n') + `\nTotal = ${totalOverallAmount.toLocaleString()}`;
                  copyToClipboard(textToCopy);
                }}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transform active:scale-95 transition-transform"
                aria-label="Copy Summary"
              >
                <Copy size={20} className="mr-2" /> Copy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ka-Thee Numbers Modal - Updated to allow user selection */}
      {showKaTheeModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] flex flex-col relative">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-orange-700">
                ကာသီးစာရင်း ({selectedKaTheeNumbers.length} ကွက်)
              </h2>
              <button onClick={() => setShowKaTheeModal(false)} className="text-gray-500 hover:text-gray-700 transform active:scale-95 transition-transform" aria-label="Close Ka-Thee Modal">
                <X size={24} />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto">
              <p className="text-sm font-semibold text-gray-700 mb-4">
                <span className="text-red-600">အနီရောင်ဖော်ပြထားသော ဂဏန်းများသည် ထွက်ဂဏန်းနှင့် တိုက်ဆိုင်ပါက ပေးရန်ရှိသော ဂဏန်းများ ဖြစ်ပါသည်။</span>
              </p>
              <div className="grid grid-cols-5 gap-2">
                {/* Filter and sort numbers to show ones with amounts at the top */}
                {Array.from({
                  length: 100
                }, (_, i) => String(i).padStart(2, '0')).sort((a, b) => {
                  const amountA = summary[a] || 0;
                  const amountB = summary[b] || 0;
                  return amountB - amountA; // Sort by amount descending
                }).map(num => (
                  <button
                    key={num}
                    onClick={() => handleKaTheeToggle(num)}
                    className={`flex flex-col items-center justify-center p-2 rounded-md shadow-sm transition-colors duration-200
                                        ${selectedKaTheeNumbers.includes(num) ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                                        ${summary[num] > 0 ? 'font-bold' : ''}
                                        ${(selectedEntryType === 'morning' && morningResult === num) || (selectedEntryType === 'evening' && eveningResult === num) ? 'border-2 border-red-500' : ''}`}
                  >
                    <span className="text-sm">{num}</span>
                    <span className="text-xs">{summary[num] ? summary[num].toLocaleString() : '0'}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 border-t flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setSelectedKaTheeNumbers([])}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
                >
                  အကုန်ဖျက်မည်
                </button>
                <span className="text-lg font-bold text-orange-700">
                  Total = {selectedKaTheeNumbers.reduce((total, num) => total + (summary[num] || 0), 0).toLocaleString()}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleCopyKaThee('kaThee')}
                  className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transform active:scale-95 transition-transform"
                  aria-label="Copy Ka-Thee list"
                >
                  <Copy size={20} className="mr-2" /> ကာသီးယူမည်
                </button>
                <button
                  onClick={() => handleCopyKaThee('kan')}
                  className="flex items-center justify-center w-full px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transform active:scale-95 transition-transform"
                  aria-label="Copy 'Kan' list"
                >
                  <Copy size={20} className="mr-2" /> ကျန်တာ ကာမည်
                </button>
              </div>
            </div>
            {showCopyConfirmation && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in-out">
                စာရင်းကို ကူးယူပြီးပါပြီ။
              </div>
            )}
          </div>
        </div>
      )}

      {/* Daily Summary Modal */}
      {showDailySummaryModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-orange-700">အမြတ်အရှုံး စာရင်း ({currentDate})</h2>
              <button onClick={() => setShowDailySummaryModal(false)} className="text-gray-500 hover:text-gray-700 transform active:scale-95 transition-transform" aria-label="Close Summary">
                <X size={24} />
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm text-gray-600 text-center mb-4">ဤစာရင်းသည် လက်ရှိထည့်သွင်းထားသော ဒေတာအတွက်သာ ဖြစ်ပါသည်။</p>
              <div className="grid grid-cols-2 gap-2 text-base">
                <span className="font-medium text-gray-600">ရောင်းရငွေ</span>
                <span className="text-right text-gray-800">{dailySummary.totalSales.toLocaleString()} ကျပ်</span>

                <span className="font-medium text-gray-600">ကော်မရှင်</span>
                <span className="text-right text-gray-800">{dailySummary.commission.toLocaleString()} ကျပ်</span>

                <span className="font-medium text-gray-600">ပေါက်</span>
                <span className="text-right text-gray-800">{dailySummary.totalWinningBetAmount.toLocaleString()} ကျပ်</span>

                <span className="font-medium text-gray-600">ယော်ငွေ</span>
                <span className="text-right text-gray-800">{dailySummary.totalPayout.toLocaleString()} ကျပ်</span>

                <div className="border-t pt-4 mt-4 col-span-2">
                  <div className={`flex justify-between items-center text-lg font-bold ${dailySummary.profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    <span>{dailySummary.profitLoss >= 0 ? 'အမြတ်' : 'အရှုံး'}</span>
                    <span>{Math.abs(dailySummary.profitLoss).toLocaleString()} ကျပ်</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Monthly Summary Modal */}
      {showMonthlySummaryModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm max-h-[90vh] flex flex-col relative">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-pink-700">လချုပ်စာရင်း ({currentMonth})</h2>
              <button onClick={() => setShowMonthlySummaryModal(false)} className="text-gray-500 hover:text-gray-700 transform active:scale-95 transition-transform" aria-label="Close Monthly Summary">
                <X size={24} />
              </button>
            </div>

            {isMonthlySummaryLoading ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8">
                <Loader2 size={40} className="animate-spin text-pink-500 mb-4" />
                <p className="text-md text-gray-600">လချုပ်ဒေတာများ တင်နေသည်...</p>
              </div>
            ) : (
              <>
                <div className="p-4 flex-1 overflow-y-auto">
                  <div className="flex justify-center items-center space-x-2 mb-4">
                    <button onClick={() => handleMonthChange(-1)} className="p-2 bg-pink-100 text-pink-700 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 transform active:scale-95 transition-transform" aria-label="Previous Month">
                      <ChevronLeft size={20} />
                    </button>
                    <input
                      type="month"
                      value={currentMonth}
                      onChange={handleManualMonthChange}
                      className="p-2 border border-gray-300 rounded-md text-center text-base font-semibold focus:outline-none focus:ring-1 focus:ring-pink-400"
                      aria-label="Select Month"
                    />
                    <button onClick={() => handleMonthChange(1)} className="p-2 bg-pink-100 text-pink-700 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 transform active:scale-95 transition-transform" aria-label="Next Month">
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {monthlySummary ? (
                    <div className="grid grid-cols-2 gap-2 text-base">
                      <span className="font-medium text-gray-600">ရောင်းရငွေ</span>
                      <span className="text-right text-gray-800">{monthlySummary.totalSales.toLocaleString()} ကျပ်</span>

                      <span className="font-medium text-gray-600">ကော်မရှင်</span>
                      <span className="text-right text-gray-800">{monthlySummary.commission.toLocaleString()} ကျပ်</span>

                      <span className="font-medium text-gray-600">ပေါက်</span>
                      <span className="text-right text-gray-800">{monthlySummary.totalWinningBetAmount.toLocaleString()} ကျပ်</span>

                      <span className="font-medium text-gray-600">ယော်ငွေ</span>
                      <span className="text-right text-gray-800">{monthlySummary.totalPayout.toLocaleString()} ကျပ်</span>

                      <div className="border-t pt-4 mt-4 col-span-2">
                        <div className={`flex justify-between items-center text-lg font-bold ${monthlySummary.profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          <span>{monthlySummary.profitLoss >= 0 ? 'အမြတ်' : 'အရှုံး'}</span>
                          <span>{Math.abs(monthlySummary.profitLoss).toLocaleString()} ကျပ်</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-center text-gray-500 mt-4">ဤလအတွက် စာရင်းမရှိသေးပါ။</p>
                  )}
                </div>
                {monthlySummary && (
                  <div className="p-4 border-t text-center">
                    <button
                      onClick={() => {
                        const header = `လချုပ်စာရင်း (${currentMonth})\n--------------------\n`;
                        const sales = `ရောင်းရငွေ\t${monthlySummary.totalSales.toLocaleString()} ကျပ်\n`;
                        const commission = `ကော်မရှင်\t\t${monthlySummary.commission.toLocaleString()} ကျပ်\n`;
                        const winningBet = `ပေါက်\t\t\t${monthlySummary.totalWinningBetAmount.toLocaleString()} ကျပ်\n`;
                        const payout = `ယော်ငွေ\t\t${monthlySummary.totalPayout.toLocaleString()} ကျပ်\n`;
                        const divider = `--------------------\n`;
                        const profitLossLabel = monthlySummary.profitLoss >= 0 ? 'အမြတ်' : 'အရှုံး';
                        const profitLoss = `${profitLossLabel}\t\t${Math.abs(monthlySummary.profitLoss).toLocaleString()} ကျပ်`;
                        const textToCopy = header + sales + commission + winningBet + payout + divider + profitLoss;
                        copyToClipboard(textToCopy);
                      }}
                      className="flex items-center justify-center w-full px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transform active:scale-95 transition-transform"
                      aria-label="Copy Monthly Summary"
                    >
                      <Copy size={20} className="mr-2" /> Copy
                    </button>
                  </div>
                )}
              </>
            )}
            {showCopyConfirmation && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in-out">
                စာရင်းကို ကူးယူပြီးပါပြီ။
              </div>
            )}
          </div>
        </div>
      )}

      {/* Per-Customer Monthly Summary Modal */}
      {showPerCustomerMonthlySummaryModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] flex flex-col relative">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-teal-700">တစ်ဦးချင်း လချုပ် ({currentMonth})</h2>
              <button onClick={() => setShowPerCustomerMonthlySummaryModal(false)} className="text-gray-500 hover:text-gray-700 transform active:scale-95 transition-transform" aria-label="Close Per-Customer Monthly Summary">
                <X size={24} />
              </button>
            </div>

            {isPerCustomerMonthlySummaryLoading ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8">
                <Loader2 size={40} className="animate-spin text-teal-500 mb-4" />
                <p className="text-md text-gray-600">ဒေတာများ တင်နေသည်...</p>
              </div>
            ) : (
              <div className="p-4 flex-1 overflow-y-auto">
                <div className="flex justify-center items-center space-x-2 mb-4">
                  <button onClick={() => handleMonthChange(-1)} className="p-2 bg-teal-100 text-teal-700 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-300 transform active:scale-95 transition-transform" aria-label="Previous Month">
                    <ChevronLeft size={20} />
                  </button>
                  <input
                    type="month"
                    value={currentMonth}
                    onChange={handleManualMonthChange}
                    className="p-2 border border-gray-300 rounded-md text-center text-base font-semibold focus:outline-none focus:ring-1 focus:ring-teal-400"
                    aria-label="Select Month"
                  />
                  <button onClick={() => handleMonthChange(1)} className="p-2 bg-teal-100 text-teal-700 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-300 transform active:scale-95 transition-transform" aria-label="Next Month">
                    <ChevronRight size={20} />
                  </button>
                </div>

                {perCustomerMonthlySummary && perCustomerMonthlySummary.length > 0 ? (
                  <div className="space-y-3">
                    {perCustomerMonthlySummary.map((customerData, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-md shadow-sm border border-gray-200 relative">
                        <button
                          onClick={() => {
                            const customerName = customerData.customerName;
                            const salesLine = `ထိုးကြေး=${customerData.totalSales.toLocaleString()}`;
                            const winningLine = customerData.totalWinningBetAmount > 0 ?
                              `P-${customerData.totalWinningBetAmount.toLocaleString()}=${customerData.totalPayout.toLocaleString()}` :
                              `P-No`;
                            const profitLossLabel = customerData.profitLoss < 0 ? 'ပေးရန်' : 'ရရန်';
                            const profitLossLine = `${profitLossLabel}=${Math.abs(customerData.profitLoss).toLocaleString()}`;
                            const textToCopy = `${customerName}\n\n${salesLine}\n${winningLine}\n${profitLossLine}`;
                            copyToClipboard(textToCopy);
                          }}
                          className="absolute top-2 right-2 p-1.5 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transform active:scale-95 transition-transform"
                          title="ဤစာရင်းကို ကူးယူပါ"
                          aria-label="Copy Customer Summary"
                        >
                          <Copy size={14} />
                        </button>
                        <h3 className="text-md font-bold text-gray-800 mb-2 pr-8">{customerData.customerName}</h3>
                        <div className="space-y-1 text-sm">
                          <p className="text-gray-700">ထိုးကြေး={customerData.totalSales.toLocaleString()}</p>
                          <p className="text-gray-700">
                            {customerData.totalWinningBetAmount > 0 ?
                              `P-${customerData.totalWinningBetAmount.toLocaleString()}=${customerData.totalPayout.toLocaleString()}` :
                              'P-No'
                            }
                          </p>
                          <p className={`font-bold ${customerData.profitLoss < 0 ? 'text-red-600' : 'text-green-600'}`}>
                            {customerData.profitLoss < 0 ? 'ပေးရန်' : 'ရရန်'}=${Math.abs(customerData.profitLoss).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 mt-4">ဤလအတွက် တစ်ဦးချင်းစာရင်းမရှိသေးပါ။</p>
                )}
              </div>
            )}
            {showCopyConfirmation && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in-out">
                စာရင်းကို ကူးယူပြီးပါပြီ။
              </div>
            )}
          </div>
        </div>
      )}

      {/* Manage Customers Modal */}
      {showManageCustomersModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-40">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold text-green-700">ထိုးသူများ စီမံရန်</h2>
              <button onClick={() => {
                setShowManageCustomersModal(false);
                setNewCustomerName('');
                setEditingCustomerId(null);
                setErrorMessage('');
              }} className="text-gray-500 hover:text-gray-700 transform active:scale-95 transition-transform" aria-label="Close Manage Customers">
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              {errorMessage && (<p className="text-red-600 text-sm mb-2 text-center animate-fade-in-out">{errorMessage}</p>)}
              <div className="flex space-x-2 mb-4">
                <input
                  type="text"
                  value={newCustomerName}
                  onChange={(e) => setNewCustomerName(e.target.value)}
                  placeholder="ထိုးသူအမည် ထည့်/ပြင်ဆင်ပါ"
                  className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400"
                  aria-label="Customer Name Input"
                />
                <button
                  onClick={handleAddOrUpdateCustomer}
                  className="px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transform active:scale-95 transition-transform"
                >
                  {editingCustomerId ? 'ပြင်ဆင်မည်' : 'ထည့်မည်'}
                </button>
              </div>
              <h3 className="text-md font-bold text-gray-700 mb-2">လက်ရှိ ထိုးသူများ:</h3>
              <div className="max-h-60 overflow-y-auto hide-scrollbar border border-gray-200 rounded-md p-2">
                {customers.length === 0 ? (
                  <p className="text-center text-gray-500 text-sm">ထိုးသူမရှိသေးပါ။</p>
                ) : (
                  customers.map(customer => (
                    <div key={customer.id} className="flex justify-between items-center bg-gray-50 p-2 rounded-md mb-2 shadow-sm">
                      <span className="text-gray-700 font-medium">{customer.name}</span>
                      <div className="flex space-x-2">
                        <button onClick={() => startEditCustomer(customer)} className="p-1 rounded-full text-blue-500 hover:bg-blue-100 transform active:scale-95 transition-transform" aria-label="Edit Customer">
                          <Edit size={16} />
                        </button>
                        <button onClick={() => confirmDeleteCustomer(customer.id)} className="p-1 rounded-full text-red-500 hover:bg-red-100 transform active:scale-95 transition-transform" aria-label="Delete Customer">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Details Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b bg-red-100">
              <h2 className="text-lg font-bold text-red-700">ထိုးကြေးပုံစံ မှားယွင်းမှု</h2>
              <button onClick={() => setShowErrorModal(false)} className="text-red-500 hover:text-red-700 transform active:scale-95 transition-transform" aria-label="Close Error Details">
                <X size={24} />
              </button>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              <p className="text-sm text-gray-700 mb-4">
                အောက်ပါ ထိုးကြေးပုံစံများတွင် မှားယွင်းမှုများ တွေ့ရှိရပါသည်။
                <br />
                <span className="font-semibold text-blue-600">ထိုးကြေးထည့်ရန်နေရာတွင် ပြန်လည်ပြင်ဆင်ပြီး ထပ်မံထည့်သွင်းပါ။</span>
              </p>
              {errorDetails.map((err, index) => (
                <div key={index} className="bg-red-50 p-3 rounded-md mb-2 border border-red-200">
                  <p className="font-medium text-red-800">"{err.originalLine}"</p>
                  <p className="text-xs text-red-600 mt-1">- {err.message}</p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t text-right">
              <button
                onClick={() => setShowErrorModal(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transform active:scale-95 transition-transform"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Delete Confirmation Modal (for entries) */}
      {showConfirmDeleteModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xs">
            <div className="flex justify-between items-center p-4 border-b bg-yellow-100">
              <h2 className="text-lg font-bold text-yellow-700">အတည်ပြုရန်</h2>
              <button onClick={() => setShowConfirmDeleteModal(false)} className="text-yellow-500 hover:text-yellow-700 transform active:scale-95 transition-transform" aria-label="Close Confirmation">
                <X size={24} />
              </button>
            </div>
            <div className="p-4 text-center">
              <p className="text-sm text-gray-700 mb-4">ဤစာရင်းကို ဖျက်ရန် သေချာပါလား။</p>
              <div className="flex justify-around space-x-4">
                <button
                  onClick={() => setShowConfirmDeleteModal(false)}
                  className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transform active:scale-95 transition-transform"
                >
                  cancel
                </button>
                <button
                  onClick={executeDeleteEntry}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transform active:scale-95 transition-transform"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Customer Delete Confirmation Modal */}
      {confirmDeleteCustomerModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xs">
            <div className="flex justify-between items-center p-4 border-b bg-yellow-100">
              <h2 className="text-lg font-bold text-yellow-700">အတည်ပြုရန်</h2>
              <button onClick={() => setConfirmDeleteCustomerModal(false)} className="text-yellow-500 hover:text-yellow-700 transform active:scale-95 transition-transform" aria-label="Close Confirmation">
                <X size={24} />
              </button>
            </div>
            <div className="p-4 text-center">
              <p className="text-sm text-gray-700 mb-4">ဤထိုးသူအမည်ကို ဖျက်ရန် သေချာပါလား။</p>
              <div className="flex justify-around space-x-4">
                <button
                  onClick={() => setConfirmDeleteCustomerModal(false)}
                  className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transform active:scale-95 transition-transform"
                >
                  cancel
                </button>
                <button
                  onClick={executeDeleteCustomer}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transform active:scale-95 transition-transform"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Render the App 
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
